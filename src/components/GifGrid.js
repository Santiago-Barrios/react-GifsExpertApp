import React from 'react'

export const GifGrid = ( { category } ) => {

  const getGifs = async () => {

    const url = 'https://api.giphy.com/v1/gifs/search?q=rick and morty&limit=10&api_key=BVtQVNAlmAGrRltgYkXtVP8P4c9lZdN9';
    const res = await fetch( url );
    const {data} = await res.json();

    const gifs = data.map( img => {
      return{
        id: img.id, 
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    })

    console.log(gifs);
  }

  getGifs();

  return (
    <>
      <h1> {category} </h1>
    </>
  )
}
