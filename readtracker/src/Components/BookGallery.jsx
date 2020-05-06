import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import Filter from './Filter';

const BookGallery = ({ books }) => {
  const [onlyLiked, setOnlyLiked] = useState(false);
  const [onlyWanted, setOnlyWanted] = useState(false);

  const list = books[0].map((book) => <BookCard {...book} onlyWanted={onlyWanted} onlyLiked={onlyLiked} key={`${book.title}_${book.isbn}`} />);


  const toggleOnlyLiked = () => {
    console.log('toggled only liked');
    setOnlyLiked(!onlyLiked);
  };

  const toggleOnlyWanted = () => {
    console.log('toggled only wanted');
    setOnlyWanted(!onlyWanted);
  };

  return (
    <div className="main_content">
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
