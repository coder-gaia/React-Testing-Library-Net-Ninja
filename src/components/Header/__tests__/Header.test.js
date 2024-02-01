import { render, screen } from '@testing-library/react'
import  Header  from '../Header'

describe('Header component tests byText', () => {
    it('Should render correctly', () => {
        render(<Header title={'my header'}/>)
        const headerEl = screen.getByText('my header')
        expect(headerEl).toBeInTheDocument()
    })

    // it('Should render correctly byRole', () => {
    //     render(<Header title={'my header'}/>)
    //     const headerEl = screen.getByRole('heading', {name: 'my header'})
    //     expect(headerEl).toBeInTheDocument()
    // })

    // it('Should render correctly byID', () => {
    //     render(<Header title={'my header'}/>)
    //     const headerEl = screen.getByTestId('header-2')
    //     expect(headerEl).toBeInTheDocument()
    // })

    // it('Should render correctly byFindTXT', async () => {
    //     render(<Header title={'my header'}/>)
    //     const headerEl = await screen.findByText('my header')
    //     expect(headerEl).toBeInTheDocument()
    // })

    // it('Should render correctly byQuery', () => {
    //     render(<Header title={'my header'}/>)
    //     const headerEl = screen.queryByText('my headers')
    //     expect(headerEl).not.toBeInTheDocument()
    // })
})