import React from "react";
import "./App.css";
import "./block.css";
import {
  clearCreator,
  getBookActionThunkCreator,
  inputDataCreator,
  showBlockCreator,
} from "./Redux/reduser";
import { connect } from "react-redux";
import BookWindow from "./bookwindow";
import BlockContainer from "./blockContainer";
import { DebounceInput } from "react-debounce-input";

function App(props: any) {
  let onValueChange = (value: any) => {
    props.inputData(value.value);
    props.getBook(value.value);
    props.clear();
  };

  let f = () => {
    if (props.request !== "") {
      props.getBook(props.request);
    } else {
      props.clear();
    }
  };

  return (
    <div className="container">
      <div className="workzone">
        <div className="searcharea">
          <div className="input">
            <DebounceInput
              minLength={2}
              debounceTimeout={1000}
              onChange={(event) => onValueChange({ value: event.target.value })}
            />
          </div>
          <div className="search">
            <button onClick={f}>поиск</button>
          </div>
        </div>
        <BlockContainer array={props.array} show={props.showBlock} />
        {props.open ? (
          <BookWindow
            cover_i={props.cover_i}
            title={props.title}
            author_name={props.author_name}
            first_publish_year={props.first_publish_year}
            publisher={props.publisher}
            isbn={props.isbn ? props.isbn : "отсутствует"}
            show={props.showBlock}
          />
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    array: state.app.response,
    request: state.app.request,
    open: state.app.open,
    cover_i: state.app.cover_i,
    title: state.app.title,
    author_name: state.app.author_name,
    first_publish_year: state.app.first_publish_year,
    publisher: state.app.publisher,
    isbn: state.app.isbn,
  };
};

const mapDispatchToprops = (dispatch: any) => {
  return {
    getBook: (request: string) => {
      dispatch(getBookActionThunkCreator(request));
    },
    inputData: (text: string) => {
      dispatch(inputDataCreator(text));
    },
    showBlock: (index: number) => {
      dispatch(showBlockCreator(index));
    },
    clear: () => {
      dispatch(clearCreator());
    },
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToprops)(App);

export default AppContainer;
