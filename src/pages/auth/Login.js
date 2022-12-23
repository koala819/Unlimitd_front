import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CenteredContent from 'src/components/CenteredContent';
import Page from 'src/components/Page';
import LoginForm from 'src/sections/auth/login/LoginForm';
// eslint-disable-next-line
console.log('in Login Page');

const Login = () => (
  <Page title="Login">
    {
      // eslint-disable-next-line
      console.log('in Login Page x2')}
    <CenteredContent>
      <Box maxWidth={450}>
        <Stack alignItems="center" direction="row" sx={{ mb: 5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h4">
              Connexion
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Utilisez les identifiants de démonstration pour vous connecter
            </Typography>
          </Box>
        </Stack>

        <LoginForm />
      </Box>
    </CenteredContent>
  </Page>
);

export default Login;
