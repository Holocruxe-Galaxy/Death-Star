import { Box, Button, Checkbox, Container, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';

const Account = () => {

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box component={'div'} display="flex" alignItems={'center'}>
        <img src="https://i.imgur.com/RsZ2Ows.png" alt="profile-img" />
        <Box component={'div'} marginLeft={5}>
          <Button variant="contained">UPLOAD NEW PHOTO</Button>
          <Button variant="outlined" color="error" sx={{ marginX: 3 }}>
            RESET
          </Button>
          <Typography sx={{ marginTop: 4 }}>Allowed JPG, GIF or PNG. Max size of 800K</Typography>
        </Box>
      </Box>
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 5,
          marginTop: 5,
        }}
      >
        <Box component={'div'} sx={{ display: 'flex' }}>
          <Stack spacing={3} width={'100%'} marginRight={2}>
            <TextField label="First Namae" variant="outlined" />
            <TextField label="Email" variant="outlined" />
            <TextField label="Phone Number" variant="outlined" />
            <TextField label="State" variant="outlined" />
            <TextField label="Country" variant="outlined" />
            <TextField label="Status" variant="outlined" />
          </Stack>
          <Stack spacing={3} width={'100%'} marginLeft={2}>
            <TextField label="Last Name" variant="outlined" />
            <TextField label="Organization" variant="outlined" />
            <TextField label="Address" variant="outlined" />
            <TextField label="Zip Code" variant="outlined" />
            <TextField label="Language" variant="outlined" />
            <TextField label="Currency" variant="outlined" />
          </Stack>
        </Box>
        <Box component={'div'} sx={{ marginY: 6 }}>
          <Button variant="contained"> SAVE CHANGES </Button>
          <Button variant="outlined" color="error" sx={{ marginLeft: 3 }}>
            CANCEL
          </Button>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ padding: 5, marginTop: 5 }}>
        <Typography>Delete Account</Typography>
        <Box component={'div'} sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox />
          <Typography> I confirm my account deactivation </Typography>
        </Box>
        <Button variant="contained">DEACTIVATE ACCOUNT</Button>
      </Paper>
    </Container>
  );
};

export default Account;
