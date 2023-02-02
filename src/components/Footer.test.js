import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from "@testing-library/user-event"
import Footer from './Footer'

describe("<Footer />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
    })
    it("it has a copyright", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>,
        )
        const footer = screen.getByText(/M&M Designs/i)
        expect(footer).toBeInTheDocument()
    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Matthew Munoz"))
        expect(screen.getByText("Matthew Munoz")).toBeInTheDocument()
        userEvent.click(screen.getByText("Monica Arganda"))
        expect(screen.getByText("Monica Arganda")).toBeInTheDocument()
        userEvent.click(screen.getByText("LEARN Academy"))
        expect(screen.getByText("LEARN Academy")).toBeInTheDocument()
    })
})