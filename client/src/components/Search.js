import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import './Search.css';

function retweetSort(prop){
  return function(a, b) {
  if (a[prop] > b[prop]) {
    return 1;
  } else if (a[prop] < b[prop]) {
    return -1;
  }
    return 0;
  }
}

function HashTagPosts(props) {
  const posts = props.posts;

  if(posts === undefined) {
    return (
      <ul></ul>
    );
  }

  let hashTagArr = [];
  const listPosts = posts.map((post) => {
    
    let url = post.entities.urls[0] === undefined ? '#' : post.entities.urls[0].url;
    let user = post.user.name;
    let screenName = post.user.screen_name
    let date = `${post.created_at.substr(4, 10)}, ${post.created_at.substr(post.created_at.length - 4)} ${post.created_at.substr(11, 19)}`;
    date = new Date(date);
    let text = post.text.substr(0, post.text.length - 23);
    
    post.entities.hashtags.forEach((tag) => {
      hashTagArr.push("#" + tag.text.toLowerCase() + " ");
    })
    
    /* removes duplicats-
    item in array, index of item, array reference, (in this case "list") */
    hashTagArr = hashTagArr.filter((item, index, array) =>
      array.indexOf(item) == index
    );

    return(
      <div className="tweetTile" key={post.id}>
      <a href={"https://twitter.com/" + screenName + "/status/" + post.id_str} target="_blank">
        
          <div className="tweetContent">
            <a href={"https://twitter.com/" + screenName} className="tweetUserLink" target="_blank">
              <strong>{user}</strong>
              <span>{screenName}</span>
            </a>
            <span className="card-title">{date.toDateString()}</span>
            <p>{text}</p>
          </div>

      </a>
      </div>
    );
  });

  return (
    <div>
      <div className="searchHashTagWrapper">
        <span className="hashTags">
          {hashTagArr}
          <button>Copy</button>
        </span>
      </div>
      <div className="searchPostWrapper">{listPosts}</div>
    </div>
  );
}

class Search extends Component {
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
      //results.sort(retweetSort("retweet_count")).reverse();
      console.log(results)
      this.setState({ results });
    })
    .catch(err => {
      console.error(err);
    });
  }

  handleChange(search_term) {
    this.setState({ search_term });
  }

  render() {
    const posts = this.state.results;

    return(
      <div className="container-fluid Search">

        <SearchBar onSearchInputChange={this.handleChange} onSearchFormSubmit={this.handleSubmit} />

        <HashTagPosts posts={posts} />

      </div>
    )
  }
}

export default Search;
