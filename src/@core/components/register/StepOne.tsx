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
import FamaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';

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
            <IconButton>
              <FamaleIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <MaleIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <EmojiEmotions fontSize="large" />
            </IconButton>
          </Stack>
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