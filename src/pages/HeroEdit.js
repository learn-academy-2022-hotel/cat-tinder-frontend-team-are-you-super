import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom';

const HeroEdit = ( { heros, updateHero }) => {
  
  const { id } = useParams()

  let currentHero = heros?.find((hero) => hero.id === +id)

  const [editHero, setEditHero] = useState({
    name: currentHero?.name,
    super_power: currentHero?.super_power,
    enjoys: currentHero?.enjoys,
    image: currentHero?.image
  })

  const handleChange = (e) => {
    setEditHero({ ...editHero, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
    updateHero(editHero, currentHero.id)
    navigate("/heroindex")
  }

  return (
    <>
    <h1 className="new-header">EDIT A HERO</h1>
    <Form>
      <FormGroup>
        <Label for="name">
          Name:
        </Label>
        <Input
          name="name"
          type="text"
          onChange={handleChange}
          value={editHero.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="super_power">
          SuperPower:
        </Label>
        <Input
          name="super_power"
          type="text"
          onChange={handleChange}
          value={editHero.super_power}
        />
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">
          Enjoy:
        </Label>
        <Input
          name="enjoys"
          type="text"
          onChange={handleChange}
          value={editHero.enjoys}
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">
          URL Image:
        </Label>
        <Input
          name="image"
          type="text"
          onChange={handleChange}
          value={editHero.image}
        />
      </FormGroup>
    </Form>
    <Button 
    onClick={handleSubmit} 
    name="submit"
    className="show-button">
      Submit Updated Hero
    </Button>
    </>
  );
}

export default HeroEdit;