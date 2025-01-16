import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={() =>{}}/>)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: {value: 'Saitama'}}) 
        //se realiza el evento, se coloca el dom o elemento y luego 
        // se le agrega el valor
        expect(input.value).toBe('Saitama')
        // screen.debug()

     })

     test('debe de llamr onNewCategoryy si el input tiene un valor', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn()
        
        render(<AddCategory onNewCategory= {onNewCategory}/>)

        const input = screen.getByRole('textbox');
        const form =screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}}) 
        fireEvent.submit(form)
        // screen.debug()
        expect(input.value).toBe("")

        expect(onNewCategory).toHaveBeenCalled() //para saber si fue llamdo
        expect(onNewCategory).toHaveBeenCalledTimes(1)//cuantas veces fue llamdo
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
        //para saber conq valor fue llamdo

      })



      test('No debe de llamar el onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        // expect(onNewCategory).not.toHaveBeenCalled()//negacion
       })
 })