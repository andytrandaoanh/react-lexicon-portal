// src/components/list.jsx

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { words: state.words };
};

const ConnectedList = ({ words }) => (
  <ul className="list-group list-group-flush">
    {words.map((word, index) => (
      <li className="list-group-item" key={index}>
        {word}
      </li>
    ))}
  </ul>
);
const ListSearch = connect(mapStateToProps)(ConnectedList);
export default ListSearch;