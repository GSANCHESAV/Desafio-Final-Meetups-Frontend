import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Box, Button } from '../styles';
import Logo from '../../../assets/images/logo.svg';

const SignUp = () => (
  <Container>
    <Box>
      <img src={Logo} alt="Logo do App." />

      <form autoComplete="off" onSubmit={() => {}}>
        <span>Nome</span>
        <input type="text" name="username" placeholder="Digite seu nome" />

        <span>Email</span>
        <input type="email" name="email" placeholder="Digite seu e-mail" />

        <span>Senha</span>
        <input type="password" name="password" placeholder="Sua senha secreta" />

        <span>Confime sua senha</span>
        <input type="password" name="password_confirmation" placeholder="Sua senha secreta" />

        <Button type="submit" value="submit">
          Criar conta
        </Button>
      </form>
      <Link to="/signin">Já tenho conta</Link>
    </Box>
  </Container>
);

export default SignUp;
