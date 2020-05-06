import React, { useState } from "react";

const RandomRecipe = () => {
  const [name, setName] = useState(undefined);
  const [src, setSrc] = useState(undefined);
  const [url, setUrl] = useState(undefined);

  const getRecipe = () => {
    console.log("in get recipe");
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((response) => {
        let result = response.meals[0];
        console.log(result);
        let { strMeal, strMealThumb, strSource } = result;
        setName(strMeal);
        setSrc(strMealThumb);
        setUrl(strSource);
      });
  };

  const content = () => {
    if (name) {
      return (
        <>
          <p>{name}</p>
          <img src={src} alt={name} />
          <p>
            <a href={url} target="_blank" title="go to recipe">
              see original recipe
            </a>
          </p>
        </>
      );
    }
  };
  return (
    <div>
      <p>Here is the random recipe generator</p>
      <button onClick={getRecipe}>Surprise me!</button>
      {content()}
    </div>
  );
};

export default RandomRecipe;
