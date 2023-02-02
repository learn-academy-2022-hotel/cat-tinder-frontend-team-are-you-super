import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe("<Header />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    it("renders a logo with a src and alt", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "AYS.png")
        expect(logo).toHaveAttribute("alt", "Are You Super logo")

    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Meet the Superheroes"))
        expect(screen.getByText("Meet the Superheroes")).toBeInTheDocument()
        userEvent.click(screen.getByText("Add a New Superhero"))
        expect(screen.getByText("Add a New Superhero")).toBeInTheDocument()
    })
})