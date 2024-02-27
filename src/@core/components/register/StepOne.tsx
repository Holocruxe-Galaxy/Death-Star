// ** MUI Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';

// ** Icon Imports
import Icon from 'src/@core/components/icon';
import FemaleIcon from '../icon/register/FemaleIcon';
import MaleIcon from '../icon/register/MaleIcon';
import NeutroIcon from '../icon/register/NeutroIcon';
import OtherIcon from '../icon/register/OtherIcon';

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.holocruxe.fontWhite, 0.8),
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: alpha(theme.palette.holocruxe.fontWhite, 0.1),
    border: `2px solid ${theme.palette.holocruxe.mediumText}`,
    width: '370px',
    height: '40px',
    '& input': {
      color: theme.palette.holocruxe.fontWhite,
    },
  },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.holocruxe.fontWhite, 0.1),
  border: `2px solid ${theme.palette.holocruxe.mediumText}`,
  width: '370px',
  height: '40px',
  color: theme.palette.holocruxe.fontWhite,
  '&:focus': {
    backgroundColor: alpha(theme.palette.holocruxe.fontWhite, 0.1),
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.holocruxe.fontWhite, 0.1),
  },
  '& .MuiSelect-icon': {
    color: theme.palette.holocruxe.fontWhite,
  },
  '& .MuiSelect-select:focus': {
    backgroundColor: 'transparent',
  },
}));

const StepPersonalInformation = ({ handleNext, handlePrev }: { [key: string]: () => void }) => {
  return (
    <>
      <Box component={'div'} sx={{ mb: 6 }}>
        <CustomTypography variant="h5">Queremos conocerte</CustomTypography>
      </Box>

      <Grid container spacing={5} justifyContent="center">
        <Grid
          xs={16}
          md={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <CustomTextField fullWidth placeholder="Tu nombre" />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <CustomTextField fullWidth placeholder="Fecha de Nacimiento" />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <FormControl fullWidth sx={{ width: '370px', height: '40px' }}>
              <CustomSelect labelId="state-select" defaultValue="País">
                <MenuItem value="País" disabled>
                  País
                </MenuItem>
                <MenuItem value="Argentina">Argentina</MenuItem>
                <MenuItem value="Venezuela">Venezuela</MenuItem>
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="Florida">Florida</MenuItem>
                <MenuItem value="Washington">Washington</MenuItem>
                <MenuItem value="Texas">Texas</MenuItem>
              </CustomSelect>
            </FormControl>
          </Grid>
          <Box component={'div'} sx={{ mb: 4 }}>
            <CustomTypography>Género:</CustomTypography>
            <Stack direction="row" spacing={4}>
              <IconButton sx={{ flexDirection: 'column' }}>
                <FemaleIcon />
                <CustomTypography>Femenino</CustomTypography>
              </IconButton>
              <IconButton sx={{ flexDirection: 'column' }}>
                <MaleIcon />
                <CustomTypography>Masculino</CustomTypography>
              </IconButton>
              <IconButton sx={{ flexDirection: 'column' }}>
                <NeutroIcon />
                <CustomTypography>Neutro</CustomTypography>
              </IconButton>
              <IconButton sx={{ flexDirection: 'column' }}>
                <OtherIcon />
                <CustomTypography>Otro</CustomTypography>
              </IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              color="secondary"
              variant="contained"
              onClick={handlePrev}
              startIcon={<Icon icon="mdi:chevron-left" fontSize={20} />}
            >
              Atrás
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleNext}
              endIcon={<Icon icon="mdi:chevron-right" fontSize={20} />}
              sx={{
                bgcolor: 'holocruxe.btn',
                '&:hover': { bgcolor: 'holocruxe.darkText' },
              }}
            >
              Siguiente
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default StepPersonalInformation;
