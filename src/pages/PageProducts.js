import * as React from 'react'
import { useParams } from 'react-router-dom'

export default function PageProducts ({ fetchInitialData, data }) {
  const [posts, setPosts] = React.useState(() => {
    return __isBrowser__
      ? window.__INITIAL_DATA__
      : data
  });

  const [loading, setLoading] = React.useState(
    posts ? false : true
  )

  const fetchPost = React.useRef(
    posts ? false : true
  )

  const { slug } = useParams()

  React.useEffect(() => {
    if (fetchPost.current === true) {
      setLoading(true)

      fetchInitialData(slug)
        .then((response) => {    
          console.log(response);      
          setPosts(response);
          setLoading(false);
        })
    } else {
      fetchPost.current = true
    }
  }, [slug, fetchPost])

  if (loading === true) {
    return <i className='loading'>🤹‍♂️</i>
  }

  return (
    <ul className='grid'>
      {posts.map(({ userId, title, id, body }, i) => (
        <li key={userId}>
          <h2>#{i+1}</h2>
          <h3><a href={id}>{title}</a></h3>
          <p>by <a href={`https://beda.id/${userId}`}>@{userId}</a></p>
          <p>{body} stars</p>
        </li>
      ))}
    </ul>
  )
}