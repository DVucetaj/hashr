import React from 'react';
import { Redirect } from 'react-router-dom';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      redirectLink: '/search'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(!this.props.redirect) {
      this.props.onSearchInputChange(event.target.value);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.redirect) {
      this.setState({
        redirect: true,
        redirectLink: `/search/${document.getElementById("search-bar-input").value}`
      })
    } else {
      this.props.onSearchFormSubmit();
    }
  }

  render() {
    const { redirect, redirectLink } = this.state;

    if(redirect) {
      return <Redirect to={redirectLink} />
    }

    return (
      <div id="SearchBar">        
        <form className="searchBarForm" onSubmit={this.handleSubmit}>
          <input id="search-bar-input" className="searchBarInput" onChange={this.handleChange} type="text" placeholder="Search hashtags" aria-label="Search" />
          <button className="searchBarSubmit linkButton" type="submit">search</button>
        </form>

      </div>
    );
  }
}

export default SearchBar;