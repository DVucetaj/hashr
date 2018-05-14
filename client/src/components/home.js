import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import './home.css';

// function retweetSort(prop){
//   return function(a, b) {
//   if (a[prop] > b[prop]) {
//     return 1;
//   } else if (a[prop] < b[prop]) {
//     return -1;
//   }
//     return 0;
//   }
// }

function HashTagPosts(props) {
  const posts = props.posts;

  if(posts === undefined) {
    return (
      <ul></ul>
    );
  }


  let hashTagArr = [];
  const listPosts = posts.map((post) => {
    let user = post.user.name;
    let text = post.text.substr(0, post.text.length - 23);
    // let url = post.entities.urls[0] === undefined ? '#' : post.entities.urls[0].url;
    let date = `${post.created_at.substr(4, 10)}, ${post.created_at.substr(post.created_at.length - 4)} ${post.created_at.substr(11, 19)}`;
    date = new Date(date);
   
    // post.entities.hashtags.forEach((tag) => {
    //   hashTagArr.push(" " + "#" + tag.text.toLowerCase());
    // })
    

    /*
    
    removes duplicats

    item --> item in array
    index --> index of item
    array --> array reference, (in this case "list")

    */
    
    hashTagArr = hashTagArr.filter((item, index, array) =>
      array.indexOf(item) === index
    );

    return(
      <li className="col-3 hashtag-post" key={post.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{date.toDateString()}</h5>
            <p className="card-text">{text}</p>
            <a href={"https://twitter.com/" + post.user.screen_name + "/status/" + post.id_str} className="btn btn-primary" target="_blank">{user}</a>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul className="row hashtag-list">{hashTagArr + " "}</ul>
      <ul className="row hashtag-results">{listPosts}</ul>
    </div>
  );
}

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search_term: null,
      results: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const searchBarInput = document.getElementById('search-bar-input');
    searchBarInput.focus();  

    const search_term = this.props.match.params.hashtag;

    if(search_term) {
      this.handleChange(search_term);
      searchBarInput.value = search_term;
      this.handleSubmit(search_term);
    }
  }

  handleSubmit(hashtag) {
    let search_term = hashtag;
    while(!search_term) {
      search_term = this.state.search_term;
    }

    fetch(`/api/v1/search/${search_term}`, {
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
      //results.sort(retweetSort("retweet_count")).reverse();
      this.setState({ results });
            this.props.history.push({
        pathname: `/search/${search_term}`
      });
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

        <HashTagPosts posts={posts} />

      </div>
    )
  }
}

export default Home;
