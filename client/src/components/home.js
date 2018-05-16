import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import './home.css';
import hashrLogo from './hashr-logo-32.png';
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
    // let url = post.entities.urls[0] === undefined ? '#' : post.entities.urls[0].url;
    let user = post.user.name;
    let screenName = post.user.screen_name
    let date = `${post.created_at.substr(4, 10)}, ${post.created_at.substr(post.created_at.length - 4)} ${post.created_at.substr(11, 19)}`;
    date = new Date(date);
    let text = post.text.substr(0, post.text.length - 23);

    
    post.entities.hashtags.forEach((tag) => {
      hashTagArr.push(" #" + tag.text.toLowerCase());
    })
    
    /*  removes duplicats   */
    hashTagArr = hashTagArr.filter((item, index, array) =>
      array.indexOf(item) === index
    );

    return(
      <div className="tweetTile" key={post.id}>
      
          <a href={"https://twitter.com/" + screenName} className="tweetUserLink" target="_blank">
            
            <strong className="tweetUser">{user}</strong>
            <span className="tweetScreenName">{" @" + screenName}</span>
            
            
          </a>
          
          <span className="card-title tweetDate">{date.toDateString()}</span>
          
          <a href={"https://twitter.com/" + screenName + "/status/" + post.id_str} target="_blank">
            <p className="tweetText">{text}</p>
          </a>
      
      </div>
    );
  });
  return (
      <div>
      <div className="searchHashTagWrapper">
        <div className="hashTagList">
          {hashTagArr}          
        </div>
        <button className="hashTagCopy linkButton">COPY</button>
      </div>
      <div className="searchPostWrapper">{listPosts}</div>
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
      <div className="">

        <div className="searchSearchBarWrapper">
          <div className="searchLogo">
            <img src={hashrLogo} alt="hashr logo"/>
            <div className="logo">hashr</div>
          </div>
          <SearchBar onSearchInputChange={this.handleChange} onSearchFormSubmit={this.handleSubmit} />
        
          <a className="gitHubLink" href="https://github.com/DVucetaj/hashfinder" targer="_blank">GitHub</a>
        </div>

        <HashTagPosts posts={posts} />

      </div>
    )
  }
}

export default Home;
