import { fireEvent, render, screen } from "@testing-library/react"
import AddInput from "../AddInput"

const MockedSetTodo = jest.fn()

describe('AddInput component tests', () => {
    it('should render correctly', () => {
        render(
        <AddInput
        todos={[]}
        setTodos={MockedSetTodo}
        />
        )
        const inputEl = screen.getByPlaceholderText('Add a new task here...')
        expect(inputEl).toBeInTheDocument()
    })

    it('should be able to type into input', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={MockedSetTodo}
            />
        )
        const typeInput = screen.getByPlaceholderText('Add a new task here...')
        fireEvent.change(typeInput, {target: {value: "go grocery shopping"}})
        expect(typeInput.value).toBe('go grocery shopping')
    })

    it('should reset the input after insertion', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={MockedSetTodo}
            />
        )
        const typeInput = screen.getByPlaceholderText('Add a new task here...')
        const addButton = screen.getByRole("button", {name: "Add"})
        fireEvent.change(typeInput, {target: {value: "go grocery shopping"}})
        fireEvent.click(addButton)
        expect(addButton.value).toBe("")
    })
})       