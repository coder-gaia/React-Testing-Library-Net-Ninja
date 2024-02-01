import { fireEvent, render, screen } from '@testing-library/react'
import  Todo  from '../Todo'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom'

const MockTodo = () => {
    return(
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText('Add a new task here...')
    const buttonElement = screen.getByRole("button", {name: "Add"})
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}})
        fireEvent.click(buttonElement)
    })
}

describe('Todo component tests', () => {
    it('Should render the input text correctly', () => {
        render(<MockTodo />)
        addTask(['do the dishes'])
        const divEl = screen.getByText('do the dishes')
        expect(divEl).toBeInTheDocument()
    })
    it('Should render multiple elements', () => {
        render(<MockTodo />)
        addTask(['do the dishes', 'pet my cat', 'study text production'])
        const divEl = screen.getAllByTestId("task-container")
        expect(divEl.length).toBe(3)
    })

    it('Should not change the the style when is not clicked', () => {
        render(<MockTodo />)
        addTask(['do the dishes'])
        const divEl = screen.getByText('do the dishes')
        expect(divEl).not.toHaveClass('todo-item-active')
    })

    it('Should change the the style when is clicked', () => {
        render(<MockTodo />)
        addTask(['do the dishes'])
        const divEl = screen.getByText('do the dishes')
        fireEvent.click(divEl)
        expect(divEl).toHaveClass('todo-item-active')
    })
})