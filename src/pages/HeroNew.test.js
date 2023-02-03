import React from 'react'
import HeroNew from './HeroNew'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'


describe("<HeroNew />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <HeroNew />
            </BrowserRouter>
        )
    })
    it("Can see the title of the page", () => {
        render(
            <BrowserRouter>
                <HeroNew />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()
        const element = screen.getByText("CREATE A NEW HERO")
        expect(element).toBeInTheDocument()
    })
    it("has a submit button", () => {
        render(
            <BrowserRouter>
                <HeroNew />
            </BrowserRouter>
        )
        const button = screen.getByRole('button', {
            name: /submit hero profile/i
          })
        expect(button).toBeInTheDocument()
    })
})