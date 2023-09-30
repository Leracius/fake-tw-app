import React from 'react'
import { CommentContainer } from './CardStyles'
import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai';
import axios from 'axios';

const Card = ({name, comment, timestamp, mg, msg, createdAt}) => {
  const [active, setActive] = useState(false);
  const [likeSent, setLikeSent] = useState(false);

  const handleLike = async (e) => {
    if (!likeSent) {
      setActive(!active);
      setLikeSent(true);
      try {
        const response = await axios.patch('https://api-102.vercel.app/comments', {
          nombre: name,
          msg: msg,
          createdAt: createdAt,
        }
        );
      } catch (error) {
        console.error('Error al enviar el PATCH:', error);
      }
    }
  };
  return (
    <CommentContainer>
        <h1>@{name}</h1>
        <p>{comment}</p>
        <div>
            <h4>{timestamp}</h4>
            <button onClick={handleLike}>{mg}<AiFillHeart size={20} color={active ? "tomato" : "white"} /></button>
        </div>
    </CommentContainer>
  )
}

export default Card