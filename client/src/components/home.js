import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import './home.css';

function HashTagPosts(props) {
  const posts = props.posts;

  if(posts === undefined) {
    return (
      <ul></ul>
    );
  } 

  const listPosts = posts.map((post) => {
        console.log(post);
    let user = post.user.name;
    let text = post.text.substr(0, post.text.length - 23);
    let url = post.entities.urls[0] === undefined ? '#' : post.entities.urls[0].url;
    let date = `${post.created_at.substr(4, 10)}, ${post.created_at.substr(post.created_at.length - 4)} ${post.created_at.substr(11, 19)}`;
    date = new Date(date);

    return(
      <li className="col-3" key={post.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{date.toDateString()}</h5>
            <p className="card-text">{text}</p>
            <a href={url} className="btn btn-primary">{user}</a>
          </div>
        </div> 
      </li>
    );
  });

  return (
    <ul className="row hashtag-results">{listPosts}</ul>
  );
}

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

  componentDidMount() {
    const searchBarInput = document.getElementById('search-bar-input');
    searchBarInput.focus();
  }

  handleSubmit() {
    let search_term = null;
    while(search_term === null) {
      search_term = this.state.search_term;
    }

    fetch(`api/v1/search/${search_term}`, {
      method: "get",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      // const status = res.status;
      return res.json();
    })
    .then((results) => {
      this.setState({ results });
    })
    .catch(err => {

    });
  }

  handleChange(search_term) {
    this.setState({ search_term });
  }

  render() {
    const posts = this.state.results;

    return(
      <div className="container-fluid home">
        
        <SearchBar onSearchInputChange={this.handleChange} onSearchFormSubmit={this.handleSubmit} />

        {/*
        <div className="row fixed-top">
          <nav className="navbar navbar-light bg-light col-12 pt-2 pb-2">
            <form className="form-inline mx-auto text-center" onSubmit={this.handleSubmit}>
              <input id="search-bar-input" className="form-control col" onChange={this.handleChange} type="text" placeholder="Search hashtags" aria-label="Search" />
              <button className="btn btn-outline-secondary col-2" type="submit"><i className="fas fa-search"></i></button>
            </form>
          </nav>
        </div>
        */}
        <HashTagPosts posts={posts} />

      </div>
    )
  }
}

export default Home;
