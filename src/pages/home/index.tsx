import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { NewsCard } from 'src/components';

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
            <Stack spacing={5} sx={{ display: 'flex', flexDirection: 'column' }}>
              <img src="https://i.imgur.com/49mV0Tr.png" alt="" />
              <Button variant="contained">INICIAR CHAT</Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      <Typography fontSize={20} fontWeight={600} marginY={4}>
        Novedades
      </Typography>

      <Grid container spacing={7}>
        <Grid item xs={6}>
          <NewsCard
            variant="location"
            title="Stumptown - Asadores de café"
            rating="4 estrellas | 98 opiniones"
            description="Antes de que existieran los Estados Unidos de América, había cafeterías."
            image="https://i.imgur.com/GJzUK2f.png"
          />
        </Grid>

        <Grid item xs={6}>
          <NewsCard
            variant="share"
            title="Apple iPhone 15 Pro-Max"
            description="iPhone 15 Pro Max. Forjado en titanio y equipado con el revolucionario chip A17 Pro, un Botón de Acción personalizable y el sistema de cámaras más potente en un iPhone"
            image="https://i.imgur.com/3MHSiMj.png"
          />
        </Grid>
        <Grid item xs={7}>
          <NewsCard
            variant="single"
            title="Influir en el influencer"
            description="¡Cancún está de regreso, mejor que nunca! Más de cien centros turísticos en México han reabierto y el secretario de turismo del estado predice que Cancún atraerá tantos visitantes en 2006 como hace dos años."
            image="https://i.imgur.com/XOeRDyT.png"
          />
        </Grid>
        <Grid item xs={5}>
          <NewsCard
            variant="info"
            title="Apple Watch"
            description="Procesador Intel Core i5 de décima generación de 6 núcleos a 3,1 GHz, Turbo Boost de hasta 4,5 GHz"
            image="https://i.imgur.com/WiumID2.png"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
