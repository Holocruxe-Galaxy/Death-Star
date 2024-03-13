// ** Imports Components Material-UI
import Grid from '@mui/system/Unstable_Grid/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
  backgroundColor: theme.palette.holocruxe.focus,
  border: `1px solid ${theme.palette.holocruxe.mediumText}`,
  borderRadius: '16px',
  padding: '6px',
  margin: '10px',
  '&:hover': {
    backgroundColor: theme.palette.holocruxe.bg,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.holocruxe.mediumText,
    marginRight: theme.spacing(1),
  },
  '& .MuiTypography-root': {
    textTransform: 'none',
    color: alpha(theme.palette.holocruxe.fontWhite, 0.8),
  },
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
      <Grid sx={{ mb: 2 }}>
        <CustomTypography variant="h5">Queremos conocerte</CustomTypography>
        <CustomSecondaryText>¿Con que te identificas?</CustomSecondaryText>
      </Grid>
      <Grid>
        <Grid>
          <InterestButton variant="contained">
            <RamenDiningIcon />
            <Typography>Comidas</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <PetsIcon />
            <Typography>Animales</Typography>
          </InterestButton>
        </Grid>
        <Grid>
          <InterestButton variant="contained">
            <SportsHandballIcon />
            <Typography>Deportes</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <MemoryIcon />
            <Typography>Tecnología</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <BrushIcon />
            <Typography>Arte</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <SportsEsportsIcon />
            <Typography>Gaming</Typography>
          </InterestButton>
        </Grid>
        <Grid>
          <InterestButton variant="contained">
            <HikingIcon />
            <Typography>Viajes</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <LinkedCameraIcon />
            <Typography>Fotografía</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <CatchingPokemonIcon />
            <Typography>Anime</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <AutoAwesomeIcon />
            <Typography>Moda y Belleza</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <TheatersIcon />
            <Typography>Películas</Typography>
          </InterestButton>
        </Grid>
        <Grid>
          <InterestButton variant="contained">
            <ScienceIcon />
            <Typography>Ciencia</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <VolunteerActivismIcon />
            <Typography>Mindfulness</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <ScatterPlotIcon />
            <Typography>Astronomía</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <PsychologyAltIcon />
            <Typography>Piscología</Typography>
          </InterestButton>
        </Grid>
        <Grid>
          <InterestButton variant="contained">
            <MovieFilterIcon />
            <Typography>Series</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <LibraryMusicIcon />
            <Typography>Música</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <NaturePeopleIcon />
            <Typography>Naturaleza</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <StarIcon />
            <Typography>Celebridades</Typography>
          </InterestButton>
          <InterestButton variant="contained">
            <AutoStoriesIcon />
            <Typography>Lectura</Typography>
          </InterestButton>
        </Grid>
      </Grid>
      <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
        <CustomBackButton
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
    </>
  );
};

export default StepInterestInformation;
