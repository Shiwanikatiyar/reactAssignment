import React from 'react'
import { useState,useContext } from 'react'
import { Heading, Box, Input, Button, Stack, VStack, Container } from '@chakra-ui/react'
import axios from 'axios'
import {AuthContext} from '../Context/AuthContextProvider'
import {Navigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const Navigate = useNavigate();
  
  const {login,
    AuthDetails: {isLoggedIn}, } = useContext(AuthContext);

  async function handleClick(){
    try {
      let resp = await axios({
        method : 'post',
        url : "https://reqres.in/api/login",
        data :{ 
        email,
        password,
      },
      })
      
      login(resp?.data?.token);
 
      // if(isLoggedIn){
      //   Navigate(`/`);
      // }

    } catch (error) {
      console.log(error);
    }
  }

  if (isLoggedIn){
    return <Navigate to="/" />
 }


  return (
    <Container maxW={"400px"}>
      <VStack spacing={6}>

        <Heading as='h1' size={"xl"}>Login Page</Heading>
        <Input
          placeholder='Enter your email'
          size='md'
          type='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Input
          placeholder='Enter your password'
          size='md'
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }} />

        <Button colorScheme='pink' variant='outline' onClick={handleClick}>LOGIN</Button>
      </VStack>

    </Container>

  )
}

export default Login