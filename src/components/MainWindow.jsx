
import React from 'react';
import SearchForm from './SearchForm.jsx';
import ListExamples from './ListExamples.jsx';
import ListSearch from './ListSearch.jsx';


class MainWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
    
  }


  render() {


  return (
    
    <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <h2><small>Search Lexicon</small></h2>
            <SearchForm />

            <div>
              <ListSearch />
            </div>
    
          </div>
          
        </div>
    </div>
      

  )
}
}

export default MainWindow;