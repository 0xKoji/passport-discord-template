import React from 'react';
import { Center, Button } from '@chakra-ui/react'

function Home(){

  const login = () => window.location.href = 'http://localhost:5000/auth'

  return(
    <div>
      <Center h='100vh'>
        <Button color='white' backgroundColor='#5865F2' onClick={login}>Login With Discord</Button>
      </Center>
    </div>
  )
}

export default Home

