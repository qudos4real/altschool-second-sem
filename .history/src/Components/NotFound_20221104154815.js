import React from 'react'
import image from '../img/404.png'

const NotFound = () => {
    return (
        <div className='container notFoundContainer'>
            <img src={image} alt="" />
            <h1 className='notFoundText'>
            Oops! Page not found.
            </h1>
        </div>
    )
}

export default NotFound