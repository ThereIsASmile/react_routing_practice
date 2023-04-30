import React from 'react'
import { useParams } from 'react-router-dom'
// useParams is a parameter within the query


const Word = () => {
    // Word function defines variable called word that is assigned the value of the word parameter from the URL using the useParams hook from react-router-dom. This accesses the URL parameters. 
    const { word } = useParams();
  return (
    // The return statement returns a JSX element that conditionally renders different content depending on whether the word parameter is a number or a string
    <div>
        {
        isNaN(word) ?
        // if word isNaN not a number, then the JSX element contains a word, if word is a number, then it displays a number
        <p>The word is: {word}</p> :
        <p>The number is: {word}</p>
        // word has to be lowercase here or it will not work!
    }
    </div>
  )
}

export default Word