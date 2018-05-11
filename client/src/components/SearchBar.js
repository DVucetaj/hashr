import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onSearchInputChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearchFormSubmit();
  }

  render() {
    return (
      <div id="SearchBar">        
        <form className="searchBarForm" onSubmit={this.handleSubmit}>
          <input id="search-bar-input" className="searchBarInput" onChange={this.handleChange} type="text" placeholder="Search hashtags" aria-label="Search" />
          <button className="linkButton" type="submit">search</button>
        </form>

      </div>
    );
  }
}

export default SearchBar;