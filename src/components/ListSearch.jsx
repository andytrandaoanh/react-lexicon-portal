// src/components/ListSearch.jsx

import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class ListSearch extends Component {
  renderList() {
    return this.props.searches.map((search,index) => {
      return (
        <li
          key={index}
          onClick={() => this.props.selectBook(search)}
          className="list-group-item"
        >
          {search.word_form}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.searches
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ListSearch);
