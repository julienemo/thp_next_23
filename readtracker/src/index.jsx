import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BookGallery from './Components/BookGallery';

import Books from './Constants/Books';

const App = () => <BookGallery {...Books} />;

ReactDOM.render(<App />, document.querySelector('#root'));
