import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => {
    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando....'))
        expect(screen.getByText(category))
    })

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: '123',
                title: 'Friends',
                url: 'https://localhost/friends.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })//false xq una vez recibido el contenido cambie de valor
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)
     })
})