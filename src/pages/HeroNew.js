import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom';

const HeroNew = ({createNewHero}) => {

  const navigate = useNavigate()

  const [newHero, setNewHero] = useState({
    name: "",
    super_power: "",
    enjoys: "",
    image: ""
  })
  
  const handleChange = (e) => {
    setNewHero({ ...newHero, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createNewHero(newHero)
    navigate("/heroindex")
  }

  return (
    <>
    <h1 className="new-header">CREATE A NEW HERO</h1>
    <Form>
      <FormGroup>
        <Label for="name">
          Name:
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="What is your SuperHero Name?"
          type="text"
          onChange={handleChange}
          value={newHero.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="super_power">
          SuperPower:
        </Label>
        <Input
          id="super_power"
          name="super_power"
          placeholder="What are your SuperPowers?"
          type="text"
          onChange={handleChange}
          value={newHero.super_power}
        />
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">
          Enjoy:
        </Label>
        <Input
          id="enjoys"
          name="enjoys"
          placeholder="What do you enjoy doing?"
          type="text"
          onChange={handleChange}
          value={newHero.enjoys}
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">
          URL Image:
        </Label>
        <Input
          id="image"
          name="image"
          placeholder="Place the URL for your profile picture here."
          type="text"
          onChange={handleChange}
          value={newHero.image}
        />
      </FormGroup>
    </Form>
    <Button 
    onClick={handleSubmit} 
    name="submit"
    className="show-button">
      Submit Hero Profile
    </Button>
    </>
  );
}

export default HeroNew;