import * as axios from "axios";

export const getBook = (book) => {
    return axios.get(`http://openlibrary.org/search.json?q=${book}`);
  };



