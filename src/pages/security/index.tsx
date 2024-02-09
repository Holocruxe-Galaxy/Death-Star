import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Item,
} from '@mui/material';

const Security = () => {
  return (
    <Container>
      <Paper sx={{ padding: 5 }}>
        <Typography fontSize={20} fontWeight={500}>
          Change Password
        </Typography>
        <Grid columns={2} sx={{ display: 'flex', marginY: 3 }}>
          <Stack
            spacing={3}
            sx={{ display: 'flex', flexDirection: 'column', marginRight: 3 }}
          >
            <TextField label="First Name" placeholder="John" />
            <TextField
              label="Email"
              type="email"
              placeholder="john.doe@gmail.com"
            />
          </Stack>
          <TextField label="Organization" placeholder="ThemeSelection" />
        </Grid>
        <Stack spacing={3}>
          <Typography>Password Requirements:</Typography>
          <Typography>
            * Minimum 8 characters long - the more, the better
          </Typography>
          <Typography>* At least one lowercase character</Typography>
          <Typography>
            * At least one number, symbol, or whitespace character
          </Typography>
        </Stack>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginY: 4 }}>
          <Button sx={{ marginRight: 3 }} variant="contained">
            SAVE CHANGES
          </Button>
          <Button sx={{ marginRight: 3 }} variant="outlined" disabled="true">
            CANCEL
          </Button>
        </Box>
      </Paper>
      <Paper sx={{ padding: 5, marginY: 4 }}>
        <Stack spacing={3}>
          <Typography fontSize={20} fontWeight={500}>
            Tow-steps verification
          </Typography>
          <Typography>Two factor authentication is not enabled yet.</Typography>
          <Typography>
            Two-factor authentication adds an additional layer of security to
            your account by requiring more than just a password to log in. Learn
            more.
          </Typography>
        </Stack>
        <Button variant="contained" sx={{ marginY: 3 }}>
          Enable two-factor authentication
        </Button>
      </Paper>
      <Paper sx={{ padding: 5, marginY: 4 }}>
        <Typography fontSize={20} fontWeight={500}>
          Create an API key
        </Typography>
        <Grid container>
          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Stack spacing={6}>
              <TextField label="Current Password" type="password" />
              <TextField label="New Password" type="password" />
              <Button variant="contained">CREATE KEY</Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img src="https://i.imgur.com/cjqoHNI.png" alt="" />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: 5, marginY: 4 }}>
        <Typography fontSize={20} fontWeight={500}>
          API Key List & Access
        </Typography>
        <Typography>
          An API key is a simple encrypted string that identifies an application
          without any principal. They are useful for accessing public data
          anonymously, and are used to associate API requests with your project
          for quota and billing.
        </Typography>
        <Stack spacing={4}>
          <Paper>
            <Typography fontSize={20} fontWeight={500}>
              Server Key 1
            </Typography>
            <Typography>23eaf7f0-f4f7-495e-8b86-fad3261282ac</Typography>
            <Typography>Created on 12 Feb 2021, 10:30 GTM+2:30</Typography>
          </Paper>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Security;
