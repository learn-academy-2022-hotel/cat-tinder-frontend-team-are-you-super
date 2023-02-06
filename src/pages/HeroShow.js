import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
          <h1 style={{color:"#ffc001"}}>Hero Information:</h1>
          <br></br>
          <h1 className="show-name" style={{color:"red"}}> <span style={{color:"#ffc001"}}>NAME: </span>{currentHero.name}</h1>
          <br></br>
          <h1><span style={{color:"#ffc001"}}>Powers: </span>{currentHero.super_power}</h1>
          <br></br>
          <h1><span style={{color:"#ffc001"}}>Enjoys: </span>{currentHero.enjoys}</h1>
          <br></br>
          <Button color="danger" className="show-button">
          <NavLink to={`/heroedit/${currentHero.id}`} className="show-edit-button">
            Edit Hero Profile
          </NavLink>
          </Button>
          <NavLink to="/heroindex">
            <Button>Delete Hero Profile</Button>
          </NavLink>
        </div>

      </>
    )}
  </main>
  );
}

export default HeroShow;