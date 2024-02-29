import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { NewsCard } from 'src/components';
import AppsChat from '../apps/chat';
import ChatWrapper from 'src/views/apps/chat/ChatWrapper';

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
                La verdadera aventura comienza cuando decides ser tú mismo. Completa tu perfil y déjanos conocerte
                mejor. ¡Estamos ansiosos por descubrir juntos el viaje que te espera!
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
            <AppsChat />
          </Paper>
        </Grid>
      </Grid>
      <Typography fontSize={20} fontWeight={600}>
        Novedades
      </Typography>
      {/* <Typography>Aquí van las card de novedades</Typography> */}

      <Box
        component="div"
        sx={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
        }}
      >
        <NewsCard
          variant="location"
          title="Stumptown - Asadores de café"
          rating="4 estrellas | 98 opiniones"
          description="Antes de que existieran los Estados Unidos de América, había cafeterías."
          image="https://i.imgur.com/GJzUK2f.png"
        />
        <NewsCard
          variant="info"
          title="Apple Watch"
          description="Procesador Intel Core i5 de décima generación de 6 núcleos a 3,1 GHz, Turbo Boost de hasta 4,5 GHz"
          image="https://i.imgur.com/WiumID2.png"
        />
        <NewsCard
          variant="single"
          title="Influir en el influencer"
          description="¡Cancún está de regreso, mejor que nunca! Más de cien centros turísticos en México han reabierto y el secretario de turismo del estado predice que Cancún atraerá tantos visitantes en 2006 como hace dos años."
          image="https://i.imgur.com/XOeRDyT.png"
        />
      </Box>
    </Container>
  );
};

export default Home;
