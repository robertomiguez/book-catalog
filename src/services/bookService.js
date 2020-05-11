import httpClient from './httpClient'

const END_POINT = `/Books`

const getBooks = () => httpClient.get(END_POINT)

const getBook = book_id => httpClient.get(`${END_POINT}/${book_id}`)

export {
  getBooks,
  getBook
}    