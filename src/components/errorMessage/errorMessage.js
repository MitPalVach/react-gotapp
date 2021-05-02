import React from "react";
import './errorMessage.css';
import imgErr from './got.jpeg';


const ErrorMessage = () => {
    return (
        <>
            <span>Something goes wrong</span>
            <img src={process.env.PUBLIC_URL + '/img/got.jpeg'}/> // из папки Public
            {/*<img src={imgErr}/>*/}
        </>
    )
}

export default ErrorMessage;