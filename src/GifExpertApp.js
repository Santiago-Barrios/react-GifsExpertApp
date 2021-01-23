
import React, {useState} from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Pinch', 'Samurai X', 'Dragon Ball']);

  // const handleAdd = () => {
  //   setCategories( [...categories, 'HunterxHunter'] );
    // setCategories( cats => [ ...cats, 'Pokemon' ] );
  // };

  return (
    <>
      <h2> GifExpertApp </h2>
      <AddCategory />
      < hr />

    
    <ol>
      {
        categories.map( category => {
          return <li key={ category }> { category } </li>
        })
      }
    </ol>

    </>
  )
}
export default GifExpertApp;