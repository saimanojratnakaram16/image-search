import React from 'react'
import ImageDisplay from './ImageDisplay';
import './ImageList.css';

const ImageList = ({imagesList}) => {
    const imagesRender = imagesList.map((img) => <ImageDisplay image = {img}/>);
  return (
    <div className='image-list'>
      {imagesRender}
    </div>
  )
}

export default ImageList
