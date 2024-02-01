import { render, screen } from '@testing-library/react'
import FollowersList from '../FollowersList'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom'

const MockedFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )

}

describe('Followerslist component tests', () => {
    it('Should render correctly', async () => {
        render(<MockedFollowersList />)
        const followerDivEl = await screen.findByTestId("follower-item-0")
        expect(followerDivEl).toBeInTheDocument()
    })

    // it('Should render correctly multiple items', async () => {
    //     render(<MockedFollowersList />)
    //     const followerDivElements = await screen.findByTestId('follower-item')
    //     expect(followerDivElements.length).toBe(5)
    // })
})