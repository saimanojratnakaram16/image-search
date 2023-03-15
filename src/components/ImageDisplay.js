import React from 'react'

const ImageDisplay = ({image}) => {
  return (
    <div>
      <img src={image.urls.raw} alt = {image.alt_description}/>
    </div>
  )
}

export default ImageDisplay

