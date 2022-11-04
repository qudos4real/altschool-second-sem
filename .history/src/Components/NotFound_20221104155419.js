import React from 'react'
import image from '../img/404.png'

const NotFound = () => {
    return (
        <div className='container '>
            <img src={image} alt="404 not found" />
            <h1 className='ErrorText'>
            Oops! Page not found.
            </h1>
        </div>
    )
}

export default NotFound