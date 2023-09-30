import React, { useEffect } from 'react';
import { Container, MainContainer } from './LayoutStyles'
import Input from '../Input/Input'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { startLoading, fetchCommentsSuccess, fetchCommentsError, } from '../../redux/commentSlice';
import Card from '../Card/Card';

const Layout = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.comment.data);
  
  useEffect(()=> {
    const fetchData = async () => {
          try {
            dispatch(startLoading());
            const response = await axios.get('https://api-102.vercel.app/comments');
            dispatch(fetchCommentsSuccess(response.data));
            console.log('Datos recibidos:', response.data);
          } catch (error) {
            dispatch(fetchCommentsError(error.message));
            console.error('Error al realizar la solicitud:', error);
          }
        };
        fetchData();
  }, [dispatch])

  const commentArray = data?.comments || [];
  const arrCommentReversed = [...commentArray].reverse();

  return (
     <MainContainer>
      <Container>
        <Input />
          {
            arrCommentReversed.map((el)=>{
              return <Card key={el.timestamp} name={el.nombre} comment={el.msg} timestamp={new Date(el.createdAt).toLocaleString('es-ES')} />
            })
          }
      </Container>
    </MainContainer>
  )
}

export default Layout