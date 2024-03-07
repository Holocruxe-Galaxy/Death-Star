// ** MUI Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { alpha, styled } from '@mui/material/styles';

// ** Icon Imports
import Icon from 'src/@core/components/icon';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import PetsIcon from '@mui/icons-material/Pets';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import MemoryIcon from '@mui/icons-material/Memory';
import BrushIcon from '@mui/icons-material/Brush';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HikingIcon from '@mui/icons-material/Hiking';
import LinkedCameraIcon from '@mui/icons-material/LinkedCamera';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TheatersIcon from '@mui/icons-material/Theaters';
import ScienceIcon from '@mui/icons-material/Science';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import StarIcon from '@mui/icons-material/Star';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.holocruxe.fontWhite, 0.8),
}));

const CustomSecondaryText = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.holocruxe.fontWhite, 0.6),
}));

const InterestButton = styled(Button)(({ theme }) => ({
  width: 'auto',
  height: '30px',
  border: `1px solid ${theme.palette.holocruxe.mediumText}`,
}));

const CustomBackButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: `1px solid ${alpha(theme.palette.holocruxe.fontWhite, 0.6)}`,
  color: alpha(theme.palette.holocruxe.fontWhite, 0.6),
  '&:hover': {
    backgroundColor: theme.palette.holocruxe.darkText,
  },
}));

const CustomNextButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.holocruxe.btn,
  color: theme.palette.holocruxe.fontWhite,
  '&:hover': {
    backgroundColor: theme.palette.holocruxe.darkText,
  },
}));

const StepInterestInformation = ({ handleNext, handlePrev }: { [key: string]: () => void }) => {
  return (
    <>
      <Box component={'div'} sx={{ mb: 4 }}>
        <CustomTypography variant="h5">Queremos conocerte</CustomTypography>
        <CustomSecondaryText sx={{ mb: 4 }}>¿Con que te identificas?</CustomSecondaryText>
      </Box>
      <Grid item spacing={5}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Stack direction="row" spacing={2}>
              <InterestButton variant="outlined">
                <RamenDiningIcon />
                <Typography>Comidas</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <PetsIcon />
                <Typography>Animales</Typography>
              </InterestButton>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" spacing={2}>
              <InterestButton variant="outlined">
                <SportsHandballIcon />
                <Typography>Deportes</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <MemoryIcon />
                <Typography>Tecnología</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <BrushIcon />
                <Typography>Arte</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <SportsEsportsIcon />
                <Typography>Gaming</Typography>
              </InterestButton>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" spacing={2}>
              <InterestButton variant="outlined">
                <HikingIcon />
                <Typography>Viajes</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <LinkedCameraIcon />
                <Typography>Fotografías</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <CatchingPokemonIcon />
                <Typography>Anime</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <AutoAwesomeIcon />
                <Typography>Moda y Belleza</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <TheatersIcon />
                <Typography>Películas</Typography>
              </InterestButton>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" spacing={2}>
              <InterestButton variant="outlined">
                <ScienceIcon />
                <Typography>Ciencia</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <VolunteerActivismIcon />
                <Typography>Mindfulness</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <ScatterPlotIcon />
                <Typography>Astronimía</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <PsychologyAltIcon />
                <Typography>Psicología</Typography>
              </InterestButton>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <InterestButton variant="outlined">
                <MovieFilterIcon />
                <Typography>Series</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <LibraryMusicIcon />
                <Typography>Música</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <NaturePeopleIcon />
                <Typography>Naturaleza</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <StarIcon />
                <Typography>Celebridades</Typography>
              </InterestButton>
              <InterestButton variant="outlined">
                <AutoStoriesIcon />
                <Typography>Lectura</Typography>
              </InterestButton>
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <CustomBackButton
              color="secondary"
              variant="contained"
              onClick={handlePrev}
              startIcon={<Icon icon="mdi:chevron-left" fontSize={20} />}
            >
              Atrás
            </CustomBackButton>
            <CustomNextButton
              variant="contained"
              onClick={handleNext}
              endIcon={<Icon icon="mdi:chevron-right" fontSize={20} />}
            >
              Siguiente
            </CustomNextButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default StepInterestInformation;
