import { Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import MaterialTable from 'material-table';

const columns = [
  {
    title: 'Browser',
    field: 'browser',
  },
  {
    title: 'Device',
    field: 'device',
  },
  {
    title: 'Location',
    field: 'location',
  },
  {
    title: 'Recent Activity',
    field: 'recentActivity',
  },
];

// In the future the data should be placed in a state
const data = [
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
  {
    browser: 'Chrome',
    device: 'Windows',
    location: 'New York, USA',
    recentActivity: '5 minutes ago',
  },
];

const Security = () => {
  return (
    <Container>
      <Paper sx={{ padding: 5, marginY: 4 }}>
        <Stack spacing={3}>
          <Typography fontSize={20} fontWeight={500}>
            Tow-steps verification
          </Typography>
          <Typography>Two factor authentication is not enabled yet.</Typography>
          <Typography>
            Two-factor authentication adds an additional layer of security to your account by requiring more than just a
            password to log in. Learn more.
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
        <Stack spacing={4}>
          <Typography fontSize={20} fontWeight={500}>
            API Key List & Access
          </Typography>
          <Typography>
            An API key is a simple encrypted string that identifies an application without any principal. They are
            useful for accessing public data anonymously, and are used to associate API requests with your project for
            quota and billing.
          </Typography>
        </Stack>
        <Stack spacing={4} marginY={4}>
          <Paper sx={{ backgroundColor: '#2E5674', padding: 5 }}>
            <Stack spacing={3}>
              <Typography fontSize={20} fontWeight={500}>
                Server Key 1
              </Typography>
              <Typography>23eaf7f0-f4f7-495e-8b86-fad3261282ac</Typography>
              <Typography fontSize={12} color="GrayText">
                Created on 12 Feb 2021, 10:30 GTM+2:30
              </Typography>
            </Stack>
          </Paper>
          <Paper sx={{ backgroundColor: '#2E5674', padding: 5 }}>
            <Stack spacing={3}>
              <Typography fontSize={20} fontWeight={500}>
                Server Key 1
              </Typography>
              <Typography>23eaf7f0-f4f7-495e-8b86-fad3261282ac</Typography>
              <Typography fontSize={12} color="GrayText">
                Created on 12 Feb 2021, 10:30 GTM+2:30
              </Typography>
            </Stack>
          </Paper>
          <Paper sx={{ backgroundColor: '#2E5674', padding: 5 }}>
            <Stack spacing={3}>
              <Typography fontSize={20} fontWeight={500}>
                Server Key 1
              </Typography>
              <Typography>23eaf7f0-f4f7-495e-8b86-fad3261282ac</Typography>
              <Typography fontSize={12} color="GrayText">
                Created on 12 Feb 2021, 10:30 GTM+2:30
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Paper>
      <Paper sx={{ padding: 5, marginY: 4 }}>
        <Typography fontSize={20} fontWeight={500}>
          Recent Devices
        </Typography>
        {/* https://material-table.com/#/docs/get-started */}
        <MaterialTable
          options={{
            search: false,
            paging: false,
            headerStyle: {
              backgroundColor: '#4C789C',
              color: '#FFF',
            },
            maxBodyHeight: 400,
            showTitle: false,
          }}
          columns={columns}
          data={data}
        />
      </Paper>
    </Container>
  );
};

export default Security;
