import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => {
    test('No debe agregar una categoría existente', () => {
        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: 'One Punch' } })
        //crea una nueva categoria
        fireEvent.submit(form)

        expect(screen.getAllByText('One Punch').length).toBe(1)
    })

    test('Debe de agregar a la categoria', () => {
        render(<GifExpertApp />)
        
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: 'Friends' } })
        //crea una nueva categoria
        fireEvent.submit(form)
        //Se envia al formulario

        expect(screen.getByText('Friends')).toBeTruthy

    })
})