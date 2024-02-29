import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Create = () => {

  const boxStyle = {
    bgColor : 'orange',
    textAlign : 'center',
    p : '10px',
    ':hover' : {
      color : 'white',
      bgColor : 'black'
    }
  }
  return (
    <div>
      <Container maxWidth="2xl" bgColor='blue.200' p='10px'>
      <Heading>Create</Heading>
      <Text my='20px'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem esse aliquid velit quas doloremque? Repellendus, repudiandae deleniti nemo nobis laboriosam labore maxime quod ea itaque error atque aut incidunt sunt.</Text>
      <Box sx={boxStyle}>Hello Create</Box>
      </Container>
    </div>
  )
}

export default Create;
