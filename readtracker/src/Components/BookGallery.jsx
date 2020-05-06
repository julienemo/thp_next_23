import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import Filter from './Filter';
import Form from './Form';

const BookGallery = ({ books }) => {
  const [onlyLiked, setOnlyLiked] = useState(false);
  const [onlyWanted, setOnlyWanted] = useState(false);
  const [search, setSearch] = useState([]);

  const toggleOnlyLiked = () => {
    setOnlyLiked(!onlyLiked);
  };

  const toggleOnlyWanted = () => {
    setOnlyWanted(!onlyWanted);
  };

  const changeSearch = (e) => {
    setSearch(e.target.value.toLowerCase().split(' '));
  };

  const submitSearch = (e) => {
    e.preventDefault();
  };

  const list = books[0].map((book) => <BookCard {...book} search={search} onlyWanted={onlyWanted} onlyLiked={onlyLiked} key={`${book.title}_${book.isbn}`} />);

  return (
    <div className="main_content">
      <div className="search_bar">
        <Form onchange={changeSearch} onsubmit={submitSearch} />
      </div>

      <div className="control_bar">
        <p className="text_lg">Filter on: </p>
        <Filter {...{ keyword: 'liked' }} onclick={toggleOnlyLiked} />
        <Filter {...{ keyword: 'wanted' }} onclick={toggleOnlyWanted} />
      </div>

      <div className="bookgallery">
        {list}
      </div>
    </div>
  );
};

export default BookGallery;
