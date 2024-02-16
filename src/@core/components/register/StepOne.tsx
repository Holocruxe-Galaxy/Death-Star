// ** MUI Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

// ** Icon Imports
import Icon from 'src/@core/components/icon';

const StepPersonalInformation = ({
  handleNext,
  handlePrev,
}: {
  [key: string]: () => void;
}) => {
  return (
    <>
      <Box component={'div'} sx={{ mb: 4 }}>
        <Typography variant="h5">Queremos conocerte</Typography>
      </Box>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth placeholder="Tu nombre" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField fullWidth placeholder="Fecha de Nacimiento" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="state-select">País</InputLabel>
            <Select labelId="state-select" defaultValue="Argentina">
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
        </Box>
        <Grid item xs={12}>
          <Box
            component="div"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
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
