
import React from 'react';




class ListExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.word,
      error: null,
      isLoaded: false,
      items: []
    };
  }


  

  componentDidMount() {

  
    //const dataURL = "http://localhost:5000/query/" + this.state.query;
    const dataURL = "http://localhost:5000/detail/" + this.props.word;

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
            error
          });
        }
      )
  }

  render() {

    //console.log('parent-to-child: ' + this.props.query);

    const { query, error, isLoaded, items } = this.state;

    //const examples = JSON.parse(items);

    //console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          
        <div className="col-sm-9">
          <h4>SEARCH RESULT</h4> 
          <h3>{query}</h3>  

            <div>  
	          { items.map(function(item, index) {

	            const keyWord = item['key-word'];
	            const bookInfo = item['book_info'];
	            const sentences = item['sentences']

	             return (
	               
			                 <div key={index}>
			                  <div>Key Word {keyWord}</div>
			                  <div>Book Information:
			                    <div>Book Author: {bookInfo['book_author']}</div>
			                  </div>
			                  <div>Extracts
			                    {sentences.map((item,i) => <div key={i}>{item}</div>)}
			                  </div>
                      </div>
       
	           );
	          })}

	          </div>
        </div>        
      );
    }
  }
}



export default ListExamples;