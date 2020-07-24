import React from 'react';

class SearchInput extends React.Component {

  render() {
    return (
      <div class="field">
        <div class="control">
          <input class="input is-primary" type="text" placeholder="Search" />
          
        </div>
        <button class="button">Search</button>
      </div>
    )
  }
}

export default SearchInput;