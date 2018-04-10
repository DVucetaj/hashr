import React, {Component} from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search_term: '',
      results: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let { search_term } = this.state;
    fetch("api/v1/search", {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: "same-origin",
      body: JSON.stringify({ search_term })
    })
    .then(res => {
      if(res.status === 200) {
        
      }
    })
    .catch(err => {

    });
  }

  handleChange(event) {
    this.setState({ search_term: event.target.value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" placeholder="Search hashtags" aria-label="Search" />
        <button type="submit">Search</button>
      </form>
    )
  }

}

export default Home;
