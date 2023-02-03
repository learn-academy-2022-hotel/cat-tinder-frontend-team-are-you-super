import React from 'react'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import HeroIndex from "./HeroIndex"
import mockHeros from '../mockHeros'

describe("<HeroIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
        <BrowserRouter>
            <HeroIndex />
        </BrowserRouter>
        )
    })
  it("renders hero cards", () => {
  const div = document.createElement("div")
  render(
    <BrowserRouter>
      <HeroIndex heros={mockHeros} />
    </BrowserRouter>, div)
  mockHeros.forEach(hero => {
    const heroName = screen.getByText(hero.name)
    expect(heroName).toBeInTheDocument()
  })
  })
})