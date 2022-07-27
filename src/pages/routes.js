import Home from './Home';
import PagePopular from './PagePopular';
import PageProducts from './PageProducts';
import { fetchPopularRepos, fetchPost } from './api';

const routes =  [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/popular/:id',
    component: PagePopular,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  },
  {
    path: '/popular/:id/mm',
    component: PagePopular,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  },
  {
    path: '/product/:slug',
    component: PageProducts,
    fetchInitialData: (path = '') => fetchPost(path.split('/').pop())
  }
]

export default routes