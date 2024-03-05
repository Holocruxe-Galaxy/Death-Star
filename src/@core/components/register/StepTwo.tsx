// ** MUI Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// ** Icon Imports
import DeleteIcon from '../icon/diary/DeleteIcon';
import SendIcon from '../icon/diary/Send';
import Icon from 'src/@core/components/icon';

const StepInterestInformation = ({ handleNext, handlePrev }: { [key: string]: () => void }) => {
  return (
    <>
      <Box component={'div'} sx={{ mb: 4 }}>
        <Typography variant="h5">Personal Information</Typography>
        <Typography sx={{ color: 'text.secondary' }}>Enter Your Personal Information</Typography>
      </Box>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handlePrev}
              startIcon={<Icon icon="mdi:chevron-left" fontSize={20} />}
            >
              Previous
            </Button>
            <Button variant="contained" onClick={handleNext} endIcon={<Icon icon="mdi:chevron-right" fontSize={20} />}>
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default StepInterestInformation;
