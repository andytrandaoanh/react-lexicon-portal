// src/components/list.jsx

import React from "react";
import { connect } from "react-redux";


function mapStateToProps(state) {

  return { searches: state.searches }
}



const ConnectedList = ({ searches }) => (
  
  <ul className="list-group list-group-flush">
    {

    	searches.map((search, index) => (
      <li className="list-group-item" key={index}>
        {search.searchKey}
      </li>
    ))}
  </ul>
  
);
const ListSearch = connect(mapStateToProps)(ConnectedList);
export default ListSearch;