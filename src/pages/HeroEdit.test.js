import React from 'react'
import HeroEdit from './HeroEdit'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe("<HeroEdit />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <HeroEdit />
            </BrowserRouter>
        )
    })
    it("Can see the title of the page", () => {
        render(
            <BrowserRouter>
                <HeroEdit />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        const element = screen.getByText("EDIT A HERO")
        expect(element).toBeInTheDocument()
    })
    it("has a submit button", () => {
        render(
            <BrowserRouter>
                <HeroEdit />
            </BrowserRouter>
        )
        const button = screen.getByRole('button', {
            name: /Submit Updated Hero/i
          })
        expect(button).toBeInTheDocument()
    })
})