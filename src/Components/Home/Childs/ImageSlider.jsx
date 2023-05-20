import React from 'react';
import Carousel from 'react-material-ui-carousel'

const ImageSlider = (props) => {
    const { images, title } = props
    return (
        <Carousel>
            {images.map((item, i) => <img src={item} style={{ width: '90%', height: '416px' }} key={i} alt={title} />)}
        </Carousel>
    )
}


export default ImageSlider;