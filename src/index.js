import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDC-jl4u3Djsf9w4dhJkoB2oQQJbQZcGkY';

// Create a new component.  This component should produce some HTML
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this compoennt's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
