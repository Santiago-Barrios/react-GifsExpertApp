import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory( { setCategories } ) {

  const [inputValue, setInputValue] = useState(''); // string Vacío necesario

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if( inputValue.trim().length > 2 ){
      setCategories(cats => [ ...cats, inputValue ]);
      setInputValue('');
    }


  }

  return (
    <form onSubmit = { handleSubmit }>
      <input
        type = "text"
        value = {inputValue}
        placeholder = 'Agrega tu serie'
        onChange = { handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}


export default AddCategory
