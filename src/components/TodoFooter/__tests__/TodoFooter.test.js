import { render, screen } from "@testing-library/react"
import TodoFooter from "../TodoFooter"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom"

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return(
        <BrowserRouter>
            <TodoFooter 
            numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

describe('TodoFooter component tests', () => {
    it('Should render correctly the tasks amount', () => {
        render(
            <MockTodoFooter 
                numberOfIncompleteTasks={5} />
        )

        const pElement = screen.getByText('5 tasks left')
        expect(pElement).toBeInTheDocument()
    })
    it('Should render if the tasks are visible', () => {
        render(
            <MockTodoFooter 
                numberOfIncompleteTasks={2} />
        )

        const pElement = screen.getByText('2 tasks left')
        expect(pElement).toBeVisible()
    })
})