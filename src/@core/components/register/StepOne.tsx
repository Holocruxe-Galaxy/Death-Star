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

// ** Icon Imports
import Icon from 'src/@core/components/icon';
import FemaleIcon from '../icon/register/FemaleIcon';
import MaleIcon from '../icon/register/MaleIcon';
import NeutroIcon from '../icon/register/NeutroIcon';
import OtherIcon from '../icon/register/OtherIcon';

const StepPersonalInformation = ({
  handleNext,
  handlePrev,
}: {
  [key: string]: () => void;
}) => {
  return (
    <>
      <Box component={'div'} sx={{ mb: 6 }}>
        <Typography variant="h5">Queremos conocerte</Typography>
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
            <TextField fullWidth placeholder="Tu nombre" />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <TextField fullWidth placeholder="Fecha de Nacimiento" />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
            <FormControl fullWidth>
              <Select labelId="state-select" defaultValue="País">
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
              </Select>
            </FormControl>
          </Grid>
          <Box component={'div'} sx={{ mb: 4 }}>
            <Typography sx={{ color: 'text.secondary' }}>Género:</Typography>
            <Stack direction="row" spacing={4}>
              <IconButton sx={{ flexDirection: 'column' }}>
                <FemaleIcon />
                <Typography>Femenino</Typography>
              </IconButton>
              <IconButton sx={{ flexDirection: 'column' }}>
                <MaleIcon />
                <Typography>Masculino</Typography>
              </IconButton>
              <IconButton sx={{ flexDirection: 'column' }}>
                <NeutroIcon />
                <Typography>Neutro</Typography>
              </IconButton>
              <IconButton sx={{ flexDirection: 'column' }}>
                <OtherIcon />
                <Typography>Otro</Typography>
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
              variant="contained"
              onClick={handleNext}
              endIcon={<Icon icon="mdi:chevron-right" fontSize={20} />}
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
