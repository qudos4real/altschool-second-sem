import React from 'react'
import image from '../img/404.png'

const NotFound = () => {
    return (
        <div>
            <img src={image} alt="" />
            <h1>
            Oops! Page not found.
            </h1>
        </div>
    )
}

export default NotFound