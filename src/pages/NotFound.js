import React from 'react';
import marvelPage from "../assets/marvelPage.png"

const NotFound = () => {
  return (
    <>
        <img 
            src={marvelPage}
            alt="404 page with Captain America"
            className="marvel-page"
        />
    </>
  );
}

export default NotFound;