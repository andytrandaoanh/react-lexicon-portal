// src/actions.js

import { SEARCH_WORD } from "./action_types";
import { DATA_LOADED } from "./action_types";


export function searchWord(searchKey) {
  return function(dispatch) {
  	const url = "http://localhost:5000/query/" + searchKey;
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: SEARCH_WORD, payload: {"searchKey" : searchKey, "searchResults": json }});
      });
  };
}

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}