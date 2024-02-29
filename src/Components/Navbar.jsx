import { Container } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <Container maxWidth='2xl' bgColor='grey' p='10px'>
      <Link to="/">Dashboard</Link>
      <Link to="Create">Create</Link>
    </Container>
  )
}

export default Navbar;
