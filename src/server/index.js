import express from 'express';
import cors from 'cors';
import * as React from 'react';
import ReactDOM from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import serialize from 'serialize-javascript';
import App from '../pages/App';
import routes from '../pages/routes';

const app = express();

app.use(cors());
app.use(express.static('dist'));

app.get('*', (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(route.path, req.url)) || {}
  
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise.then((data) => {
    const markup = ReactDOM.renderToString(
      <StaticRouter location={req.url} >
        <App serverData={data} />
      </StaticRouter>
    )

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with React Router</title>
          <!-- ogp tags visit https://ogp.me/ for more details -->
          <meta property="og:title" content="SSR with React Router" />
          <meta property="og:description" content="Help you running reactjs app by server side rendering with react router" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://beda.id/product/testing-product-189876/" />
          <meta property="og:image" content="https://idn.media-beda.id/images/testing.jpg" />
          <meta property="og:image:alt" content="A shiny blue beda image with a white frame" />          

          <script src="/bundle.js" defer></script>
          <link href="/main.css" rel="stylesheet">
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
  }).catch(next)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});