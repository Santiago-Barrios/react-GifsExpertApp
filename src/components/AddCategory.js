import React, { useState } from 'react'

function AddCategory() {

  const [inputValue, setInputValue] = useState('Hola mundo')

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('viejo ud puede');

  }

  return (
    <form onSubmit = { handleSubmit }>
      <input
        type = "text"
        value = {inputValue}
        onChange = { handleInputChange }
      />
    </form>
  )
}

export default AddCategory
