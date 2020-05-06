import React, { useState } from 'react';

const BookCard = ({
  title, thumbnailUrl, shortDescription, longDescription, isFav, isWanted, onlyLiked, onlyWanted,
}) => {
  const [liked, setLiked] = useState(isFav);
  const [wanted, setWanted] = useState(isWanted);

  const toggleLiked = () => {
    setLiked(!liked);
  };
  const toggleWanted = () => {
    setWanted(!wanted);
  };

  const displayClass = () => {
    if (!onlyLiked && !onlyWanted) {
      return '';
    }
    if (onlyLiked && !onlyWanted && !liked) {
      return 'd-none';
    }
    if (onlyWanted && !onlyLiked && !wanted) {
      return 'd-none';
    }
    if (onlyLiked && onlyWanted && !(liked && wanted)) {
      return 'd-none';
    }
    return '';
  };

  const wantedText = wanted ? 'wanted' : 'want';
  const likedText = liked ? 'liked' : 'like';
  const description = shortDescription || (longDescription ? `${longDescription.substring(0, 300)}...` : 'This book has no description');

  return (
    <div className={`bookcard ${displayClass()}`}>
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
