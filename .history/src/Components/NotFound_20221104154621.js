import React from 'react'
import image from '../img/404.png'

const NotFound = () => {
    return (
        <div className='container'>
            <img src={image} alt="" />
            <h1 className='notFound'>
            Oops! Page not found.
            </h1>
        </div>
    )
}

export default NotFound