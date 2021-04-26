import { getBook } from "../API/API";

const GET_SEARCH = "GET-SEARCH";
const INPUT_DATA = "INPUT-DATA";
const SHOW_BLOCK = "SHOW-BLOCK";
const CLEAR = "CLEAR"

export type initialStateType = {
  request: string;
  response: Array<any>;
  found: boolean;
  open: boolean;
  cover_i: number | null;
  title: string | null;
  author_name: string | null;
  first_publish_year: number | null;
  publisher: string | null;
  isbn: string | null;
};

let initialState: initialStateType = {
  request: "",
  response: [],
  found: false,
  open: false,
  cover_i: null,
  title: null,
  author_name: null,
  first_publish_year: null,
  publisher: null,
  isbn: null,
};

const reduser = (state = initialState, action: any): initialStateType => {
  let stateCopy: initialStateType = { ...state };
  switch (action.type) {
    case GET_SEARCH:
      if (action.resp !== undefined) {
        if (action.resp.length > 0) {
          stateCopy = { ...state, response: action.resp, found: true };
        }
      }

      return stateCopy;
    case INPUT_DATA:
      stateCopy = { ...state, request: action.data };
      return stateCopy;
    case SHOW_BLOCK:
      if (state.open) {
        stateCopy = { ...state, open: false };
      } else {
        stateCopy = {
          ...state,
          open: true,
          cover_i: state.response[action.index].cover_i,
          title: state.response[action.index].title,
          author_name: state.response[action.index].author_name,
          first_publish_year: state.response[action.index].first_publish_year,
          publisher: state.response[action.index].publisher[0],
          isbn: state.response[action.index].isbn ?state.response[action.index].isbn[0]:"отсутствует" ,
        };
      }
      return stateCopy;
    case CLEAR:
      stateCopy={...state,response:[]}
      return stateCopy;
    default:
      return state;
  }
};

type getBookActionType = {
  type: typeof GET_SEARCH;
  resp: Array<any>;
};

const getBookActionCreator = (response: any): getBookActionType => {
  return {
    type: GET_SEARCH,
    resp: response.data.docs,
  };
};

type inputData = {
  type: typeof INPUT_DATA;
  data: string;
};
export const inputDataCreator = (text: string): inputData => {
  return {
    type: INPUT_DATA,
    data: text,
  };
};

export const getBookActionThunkCreator = (request: string) => {
  return (dispatch: any) => {
    
    getBook(request)
      .then((response: any) => {
        dispatch(getBookActionCreator(response));
      })
      .catch(function (error: any) {});
  };
};

type showBlock = {
  type: typeof SHOW_BLOCK;
  index: number;
};

export const showBlockCreator = (index: number): showBlock => {
  return {
    type: SHOW_BLOCK,
    index: index,
  };
};

type clear ={
  type: typeof CLEAR;
}
export const clearCreator =():clear=>{
  return{
    type: CLEAR
  }

}

export default reduser;
