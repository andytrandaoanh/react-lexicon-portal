// src/components/list.jsx

import React from "react";
import { connect } from "react-redux";


function mapStateToProps(state) {

  return { searches: state.searches }
}


class CListSearch extends React.Component {
 	constructor(props) {
      super(props);
     
      this.state = {
      	 searches: this.props.searches,
         isLoaded: false,
         items: [],
         error: null
      };
     }

  componentDidMount(){
  	 const dataURL = "http://localhost:5000/query/act%';"

    fetch(dataURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )

  }

  render() {
  	
  	const { isLoaded, items } = this.state;
  
    return (
			<div>
              {items.map((item, index) => (
                <button key={index} className="btn" value={item.word_form} onClick={this.onLinkClick}>
                  {item.word_form}
                </button>
               ))}
            </div>
    )
  }
}


const ListSearch = connect(mapStateToProps)(CListSearch);
export default ListSearch;