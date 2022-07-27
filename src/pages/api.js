import fetch from 'isomorphic-fetch'

export const fetchPopularRepos = (language = 'all') => {
  const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error)
      return null
    });
}

export const fetchPost = (slug) => {
  const encodedURI = encodeURI(`https://jsonplaceholder.typicode.com/posts`)

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos)
    .catch((error) => {
      console.warn(error)
      return null
    });
}