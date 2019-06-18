
import React from 'react';
import { connect } from "react-redux";
import { searchWord } from "../redux/actions";

function mapDispatchToProps(dispatch) {
  return {
    searchWord: word => dispatch(searchWord(word))
  };
}


class ConnectedForm extends React.Component {
   
   constructor(props) {
      super(props);

      
      this.state = {
         word: 'action'
      };


      this.updateState = this.updateState.bind(this);
      this.handleClick = this.handleClick.bind(this);
      
      
     
   };

   updateState(e) {
      this.setState({word: e.target.value});
      //console.log(this.state);

   };


   handleClick(){
      event.preventDefault();
      //console.log(this.state.word);
      //const { word } = this.state;
      this.props.searchWord(this.state.word);
      //this.setState({ word: "" });

   };



   render() {
     const { word } = this.state;
     //this.setState({func: this.props.onSubmit})
     
     //console.log(items);

      return (
 
          <div className="input-group">
              <input type="text" className="form-control" value = {this.state.word} 
                onChange = {this.updateState} placeholder="Enter your word.." />
              <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.handleClick}>
                <span className="glyphicon glyphicon-search"></span>
              </button>
              </span>
          </div>

        
      );
   }
}

const SearchForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default SearchForm;