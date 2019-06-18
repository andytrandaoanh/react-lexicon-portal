// src/actions.js

import { SEARCH_WORD } from "./action_types";
import { DATA_LOADED } from "./action_types";


export function searchWord(payload) {
  return { type: SEARCH_WORD, payload };
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