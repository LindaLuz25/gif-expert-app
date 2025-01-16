import PropTypes from "prop-types"
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        // console.log(target.value)
        setInputValue(target.value) //recoge el valor y lo almacena
    }

    const onSubmit = (event) => {
        event.preventDefault() //impide que la pagian se recargue
        if (inputValue.trim().length <= 1) return;
        setInputValue('')
        onNewCategory(inputValue.trim()) //Lo agrega al array
    }

    return (
        <>
            <form onSubmit={onSubmit} aria-label="form">
                <input type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange} />
            </form>

        </>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}