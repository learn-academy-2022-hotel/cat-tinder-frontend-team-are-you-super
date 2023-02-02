import React from 'react';
import { useParams } from 'react-router-dom';

const HeroShow = ({ heros }) => {
  const { id } = useParams()
  let currentHero = heros?.find((hero) => hero.id === +id)

  return (
    <main className="hero-show-cards">
    {currentHero && (
      <>
        <img
          alt={`profile of a Hero named ${currentHero.name}`}
          src={currentHero.image}
          className="Hero-show-img"
        />
        <div className="hero-info">
          <h2 style={{color:"#ffc001"}}>Hero Information:</h2>
          <br></br>
          <h1 style={{color:"red"}}> <span style={{color:"#ffc001"}}>NAME: </span>{currentHero.name}</h1>
          <br></br>
          <h4><span style={{color:"#ffc001"}}>Powers: </span>{currentHero.super_power}</h4>
          <br></br>
          <h4><span style={{color:"#ffc001"}}>Enjoys: </span>{currentHero.enjoys}</h4>
        </div>
      </>
    )}
  </main>
  );
}

export default HeroShow;