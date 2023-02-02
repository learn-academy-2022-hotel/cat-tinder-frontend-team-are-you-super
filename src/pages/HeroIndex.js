import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"

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
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                SuperPower:
              </CardSubtitle>
              <CardText>
                {hero.super_power}
              </CardText> */}
              <Button className="index-button">
                About Me
              </Button>
            </CardBody>
          </Card>
        )
      })}
    </main>
  );
}

export default HeroIndex;