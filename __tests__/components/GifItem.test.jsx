import { render, screen} from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem/>', () => { 
    const title = "Friends";
    const url = "https://friends.com/";
    
    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
     });

     test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render( <GifItem  title={title}  url={url}  /> );
        const {src,alt} = screen.getByRole('img');
        
        expect(src).toBe(url);
        expect(alt).toBe(title)
        
      })

      test('dbe de mostrar el titulo enn el componente', () => { 
        render(<GifItem title={title} url = {url}/>)
        expect(screen.getByText(title)).toBeTruthy()
       })
 })