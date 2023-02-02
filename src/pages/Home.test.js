import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

describe('<Home />', () => {
    it("renders withour crashing", () => {
        const div = document.createElement("div")
        render(<Home />, div)
    })
})