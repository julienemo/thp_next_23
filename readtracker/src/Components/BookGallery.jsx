import React from 'react';
import BookCard from './BookCard';

const BookGallery = ({ books }) => {
  const list = books[0].map((book) => <BookCard {...book} key={`${book.title}_${book.isbn}`} />);

  return (<div className="bookgallery">{list}</div>);
};

export default BookGallery;
