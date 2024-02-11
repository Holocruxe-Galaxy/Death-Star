import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const Home = () => {
  return (
    <Container>
      <Paper sx={{ paddingLeft: 10, paddingTop: 10, paddingRight: 10 }}>
        <Grid container>
          <Grid item xs={9}>
            <Stack spacing={3} marginY={3}>
              <Typography fontSize={20} fontWeight={600}>
                ¡Te damos la Bienvenida!
              </Typography>
              <Typography>
                La verdadera aventura comienza cuando decides ser tú mismo.
                Completa tu perfil y déjanos conocerte mejor. ¡Estamos ansiosos
                por descubrir juntos el viaje que te espera!
              </Typography>
            </Stack>
            <Button variant="contained">VER PERFIL</Button>
          </Grid>
          <Grid item xs={3}>
            <img src="https://i.imgur.com/9tpGVAj.png" alt="" />
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3} marginY={4}>
        <Grid item xs={4}>
          <Paper sx={{ height: 400 }}>
            <img src="https://i.imgur.com/Ri2Ldey.png" alt="" />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper
            sx={{
              height: 400,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Stack
              spacing={5}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <img src="https://i.imgur.com/49mV0Tr.png" alt="" />
              <Button variant="contained">INICIAR CHAT</Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      <Typography fontSize={20} fontWeight={600}>
        Novedades
      </Typography>
      <Typography>Aquí van las card de novedades</Typography>
    </Container>
  );
};

export default Home;
