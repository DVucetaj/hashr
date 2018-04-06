import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class Search extends Component{

  constructor() {
    super();
    this.state = {
      hashtags: [],
      tweets: [],
    };
    
    {/*
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchHashtags = this.fetchHashtags.bind(this);
    this.fetchTweets = this.fetchTweets.bind(this);
    */}
    
  }

  componentDidMount(){
 
  }

  fetchHashtags() {
             
  }

  fetchTweets() {
             
  }

  render() {
    return(
      <div>
      

      <p>this the search page</p>

      {/*
        <div className = "search-hashtagResults">
          {this.state.hashtags.map(hashtags =>
            <div key={HASHTAGKEY} className="hashtag">
              {HASHTAG}
           </div>
          )}
        </div>

        <div className = "search-tweetResults">
          {this.state.tweets.map(tweets =>
            <div key={TWEETKEY} className="tweet">
              {TWEETOBJECTFIELDS}
              {TWEETOBJECTFIELDS}
              {TWEETOBJECTFIELDS}
           </div>
          )}
        </div>

      */}

      </div>
    )
  }

}

export default Search;
