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
          } catch (error) {
            dispatch(fetchCommentsError(error.message));
          }
        };
        fetchData();

        const intervalId = setInterval(() => {
            fetchData();
          }, 3000);
            return () => {
            clearInterval(intervalId); 
          };
  }, [dispatch])

  const commentArray = data?.comments || [];
  const arrCommentReversed = [...commentArray].reverse();

  return (
     <MainContainer>
      <Container>
        <Input />
          {
            arrCommentReversed.map((el)=>{
              return <Card key={el.timestamp} name={el.nombre} comment={el.msg} timestamp={new Date(el.createdAt).toLocaleString('es-ES')} mg={el.mg} msg={el.msg} createdAt={el.createdAt}/>
            })
          }
          <h1>Made with ❤️ by Axel Quintana</h1>
      </Container>
    </MainContainer>
  )
}

export default Layout