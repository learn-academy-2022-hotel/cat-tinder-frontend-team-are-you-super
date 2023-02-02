import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"
import { NavLink } from 'react-router-dom';

const HeroIndex = ({ heros }) => {
  return (
    <main className="index-cards">
      {heros?.map((hero, index) => {
        return (
          <Card color="warning" style={{width: '18rem'}}
            key={index}
          >
            <img className="index-image" alt="Sample" src={hero.image} />
            <CardBody>
              <CardTitle tag="h3">
                {hero.name}
              </CardTitle>
              <NavLink to={`/heroshow/${hero.id}`} className="index-button">
                About Me
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  );
}

export default HeroIndex;