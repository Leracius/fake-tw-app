import React from 'react'
import { CommentContainer } from './CardStyles'
import { useState } from 'react'
import { apiCall } from '../../api/axiosCall'

const Card = ({name, comment, timestamp}) => {
const [active, setActive] = useState(false)

const likeColor = () =>{
    setActive(!active)
}
 


  return (
    <CommentContainer>
        <h1>{name}</h1>
        <p>{comment}</p>
        <div>
            <h4>{timestamp}</h4>
            <button onClick={likeColor} style={active?{color: "tomato"}:{color: "white"}}>mg</button>
        </div>
    </CommentContainer>
  )
}

export default Card