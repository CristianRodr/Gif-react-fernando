import {useState} from "react";

export const AddCategory = ({ onNewCategory }) => { // Agregando props para interactuar

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories]); // Forma de renderizar adicionar nuestro input

        setInputValue(''); // Limpiar onInputChange
        onNewCategory( inputValue.trim() )
    }

    return (
        <form onSubmit={ onSubmit }> {/* onSubmit es igual a -> event => onSubmit(event) */}
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

