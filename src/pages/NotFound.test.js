import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NotFound from './NotFound'

describe('<NotFound />', () => {
    it("renders withour crashing", () => {
        const div = document.createElement("div")
        render(<NotFound />, div)
    })
    it("has an img", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        const img = screen.getByRole("img")
        expect(img).toHaveAttribute("src", "marvelPage.png")
        expect(img).toHaveAttribute("alt", "404 page with Captain America")
    })
})
