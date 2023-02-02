import React from "react";
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HeroShow from './HeroShow'
import mockHeros from '../mockHeros'

const renderShow = () => {
  render(
  <MemoryRouter initialEntries={["/heroshow/1"]}>
    <Routes>
    <Route path="heroshow/:id" element={<HeroShow heros={mockHeros}/>} />
    </Routes>
  </MemoryRouter>
  )
}

describe("<HeroShow />", () => {
    it("renders hero cards with enjoys", () => {
        renderShow()
        expect(screen.getByText(`${mockHeros[0].enjoys}`)).toBeInTheDocument()
        })
    it("renders hero cards with super power", () => {
        renderShow()
        expect(screen.getByText(`${mockHeros[0].super_power}`)).toBeInTheDocument()
        })
    it("renders hero cards with name", () => {
        renderShow()
        expect(screen.getByText(`${mockHeros[0].name}`)).toBeInTheDocument()
        })
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <HeroShow />
            </BrowserRouter>
            )
        })
    })