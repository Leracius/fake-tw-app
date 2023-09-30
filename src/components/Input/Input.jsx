import React from 'react'
import { CardContainer, NameContainer, ButtonContainer } from './InputStyles'
import axios from 'axios';
import { useState } from 'react';

const Input = () => {

  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post('https://api-102.vercel.app/comments', {
        nombre: nombre,
        msg: mensaje,
        createdAt: new Date(),
        mg: 0
      });

      console.log('Respuesta:', response.data);

      // Puedes hacer algo con la respuesta si es necesario
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  };

  return (
    <CardContainer>
      <form onSubmit={handleSubmit}>
        <NameContainer>
          <h1>Nombre: </h1>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </NameContainer>
        <textarea placeholder="Escribe algo..." value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
        <ButtonContainer>
          <button type="submit">POSTEAR</button>
        </ButtonContainer>
      </form>
    </CardContainer>
  );
};

export default Input