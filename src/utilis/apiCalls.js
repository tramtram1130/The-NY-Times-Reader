import { API_KEY, API_URL } from './constants'

export const getArticles = (genre) => {
  return fetch(`${API_URL}/${genre}.json?api-key=${API_KEY}`)
    .then(response => response.json())
}

