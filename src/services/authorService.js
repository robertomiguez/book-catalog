import httpClient from './httpClient'

const END_POINT = `/Authors`

const getAuthors = () => httpClient.get(END_POINT)

const getAuthor = author_id => httpClient.get(`${END_POINT}/${author_id}`)

export {
  getAuthors,
  getAuthor
}    