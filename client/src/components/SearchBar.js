import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        
        <form className="searchBarForm" onSubmit={this.handleSubmit}>
          <input id="search-bar-input" className="searchBarInput" onChange={this.handleChange} type="text" placeholder="Search hashtags" aria-label="Search" />
          <button className="searchBarSubmit" type="submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default SearchBar;