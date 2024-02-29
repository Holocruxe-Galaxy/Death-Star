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
import { useAuth } from 'src/hooks/useAuth';

// ** Icon Imports
import Icon from 'src/@core/components/icon';
import FemaleIcon from '../icon/register/FemaleIcon';
import MaleIcon from '../icon/register/MaleIcon';
import NeutroIcon from '../icon/register/NeutroIcon';
import OtherIcon from '../icon/register/OtherIcon';
import { useState } from 'react';

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

const CustomNextButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.holocruxe.btn,
  color: theme.palette.holocruxe.fontWhite,
  '&:hover': {
    backgroundColor: theme.palette.holocruxe.darkText,
  },
}));

const StepPersonalInformation = ({ handleNext }: { [key: string]: () => void }) => {
  const [form, setForm] = useState({ fullName: '', birthDate: '', country: '', gender: '' });
  const { setUser } = useAuth();
  const onChangeForm = (e: any) => {
    if (e.target.name !== 'country' && e.currentTarget.dataset.name === 'gender') {
      setForm({
        ...form,
        [e.currentTarget.dataset.name]: e.currentTarget.dataset.value,
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSubmitForm = async () => {
    const token = window.localStorage.getItem('AuthorizationToken');
    if (form.fullName !== '' && form.birthDate !== '' && form.country !== '' && form.gender !== '') {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CORUSCANT}/onboarding/one`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...form }),
      });

      if (response.status === 200) {
        window.localStorage.setItem('accessToken', token ? token : '');
        window.localStorage.setItem('userData', JSON.stringify({ username: '', role: 'client' }));
        localStorage.setItem('status', 'COMPLETE');
        setUser({
          id: '',
          username: '',
          role: 'admin',
        });
        window.location.href = '/home';
      }
    } else {
      window.alert('Completa el formulario por favor');
    }
  };

  return (
    <>
      <Box component={'div'} sx={{ mb: 10 }}>
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
          <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
            <CustomTextField
              autoComplete="off"
              name="fullName"
              onChange={(e) => {
                onChangeForm(e);
              }}
              fullWidth
              placeholder="Tu nombre"
            />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
            <CustomTextField
              name="birthDate"
              onChange={(e) => {
                onChangeForm(e);
              }}
              type="date"
              fullWidth
              placeholder="Fecha de Nacimiento"
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
            <FormControl fullWidth sx={{ width: '370px', height: '40px' }}>
              <CustomSelect
                name="country"
                onChange={(e) => {
                  onChangeForm(e);
                }}
                defaultValue={'País'}
                labelId="state-select"
              >
                <MenuItem value="País" disabled selected>
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
              <IconButton
                data-name="gender"
                data-value="Femenino"
                onClick={(e) => {
                  onChangeForm(e);
                }}
                sx={{ flexDirection: 'column' }}
              >
                <FemaleIcon />
                <CustomTypography>Femenino</CustomTypography>
              </IconButton>
              <IconButton
                data-name="gender"
                data-value="Masculino"
                onClick={(e) => {
                  onChangeForm(e);
                }}
                sx={{ flexDirection: 'column' }}
              >
                <MaleIcon />
                <CustomTypography>Masculino</CustomTypography>
              </IconButton>
              <IconButton
                data-name="gender"
                data-value="Neutro"
                onClick={(e) => {
                  onChangeForm(e);
                }}
                sx={{ flexDirection: 'column' }}
              >
                <NeutroIcon />
                <CustomTypography>Neutro</CustomTypography>
              </IconButton>
              <IconButton
                data-name="gender"
                data-value="Otro"
                onClick={(e) => {
                  onChangeForm(e);
                }}
                sx={{ flexDirection: 'column' }}
              >
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
              justifyContent: 'flex-end',
            }}
          >
            <CustomNextButton
              color="primary"
              variant="contained"
              onClick={onSubmitForm}
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

export default StepPersonalInformation;
