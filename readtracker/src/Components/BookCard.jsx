import React, { useState } from 'react';

const BookCard = ({
  title, thumbnailUrl, shortDescription, longDescription, isFav, isWanted,
}) => {
  const [liked, setLiked] = useState(isFav);
  const [wanted, setWanted] = useState(isWanted);

  const toggleLiked = () => {
    setLiked(!liked);
  };
  const toggleWanted = () => {
    setWanted(!wanted);
  };

  const cardClass = [liked ? 'liked' : '', wanted ? 'wanted' : ''].join(' ');
  const wantedText = wanted ? 'wanted' : 'want';
  const likedText = liked ? 'liked' : 'like';
  const description = shortDescription || (longDescription ? `${longDescription.substring(0, 300)}...` : 'This book has no description');

  return (
    <div className={`bookcard ${cardClass}`}>
      <img className="bookcover" src={thumbnailUrl} alt={title} />
      <p className="title">{title}</p>
      <p className="buttonbar">
        <button type="button" onClick={toggleLiked} className={`btn btn_${liked.toString()}`}>
          {likedText}
        </button>
        <button type="button" onClick={toggleWanted} className={`btn btn_${wanted.toString()}`}>
          {wantedText}
        </button>
      </p>

      <p>{description }</p>
    </div>
  );
};

export default BookCard;
