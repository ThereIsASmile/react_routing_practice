import React from 'react'
import { useParams } from 'react-router-dom'
// this import is bringing in useParams hook from the react-router-dom library in the React application. useParams is used to access the parameters in the current URL 

const WordColor = () => {
    const { word, color, bgColor } = useParams();
    // the useParams hook returns an object containg these key value pairs for each URL parameter from the URL 
    return (
        <p style={ color ? {color: color, backgroundColor: bgColor} : null}>The word is: {word} </p>
    )
    // the parameters are destructured from the returned object and used to conditionally style the rendered text. the style attribute is applied to the p element and is set to an object that includes a color property with the value color. the backgroundColor property has the value of bgColor. 
    // the null is there so that if no color parameter is present in the URL the style attribute is not being used.
}

export default WordColor