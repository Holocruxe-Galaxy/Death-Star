// ** React Imports
import { useEffect, useState, ReactNode, useRef } from 'react';

// ** Next Imports
import Link from 'next/link';

// ** MUI Components
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Box, { BoxProps } from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiFormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
// import Alert from '@mui/material/Alert';
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import FormHelperText from '@mui/material/FormHelperText';
// import InputAdornment from '@mui/material/InputAdornment';

// ** Auth0 user Import
import { useUser } from '@auth0/nextjs-auth0/client';

// ** Threejs Imports

import { Canvas } from '@react-three/fiber';
import { Environment, Stars, PerspectiveCamera } from '@react-three/drei';
import HoloplanetCanvas from '../../@core/components/login/models/Holoplanet';
import BotCanvas from '../../@core/components/login/models/Officialbot';
import Particles from '../../@core/components/login/adds/Particles';

import { makeStyles } from '@mui/styles';

// ** Icon Imports
// import Icon from 'src/@core/components/icon';

// ** Third Party Imports
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// ** Hooks
import { useAuth } from 'src/hooks/useAuth';
// import useBgColor from 'src/@core/hooks/useBgColor';
import { useSettings } from 'src/@core/hooks/useSettings';

// ** Configs
// import themeConfig from 'src/configs/themeConfig';

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout';
import { loginToHolocruxe, registerToHolocruxe } from 'src/context/functions';
import { Icon } from '@mui/material';
import Rocket from 'src/@core/icons/login/Rocket';
import HolocruxeLogo from '../../@core/icons/login/HolocruxeLogo';
import FacebookIcon from '../../@core/icons/login/FacebookIcon';
import GoogleIcon from 'src/@core/icons/login/GoogleIcon';
import LinkedinIcon from 'src/@core/icons/login/LinkedInIcon';

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400,
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450,
  },
}));

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400,
  },
}));

const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) },
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    '& .MuiFormControlLabel-label': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary,
    },
  }),
);

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(5).required(),
});

const defaultValues = {
  password: 'holasa',
  username: 'admin4872',
};

// interface FormData {
//   username: string;
//   password: string;
// }

const useStyles = makeStyles(() => ({
  picker: {
    position: 'absolute',
    top: 90,
    zIndex: 9999,
  },
  iconButton: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
    '& .MuiIconButton-label': {
      transition: 'none',
    },
  },
}));

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  // const [showPassword, setShowPassword] = useState<boolean>(false);

  // ** Hooks
  const auth = useAuth();
  const theme = useTheme();
  // const bgColors = useBgColor();
  const { settings } = useSettings();
  const hidden = useMediaQuery(theme.breakpoints.down('md'));

  // ** Vars
  const { skin } = settings;

  const {
    // control,
    // setError,
    // handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data: FormData) => {
  //   const { username, password } = data;
  //   auth.login({ username, password, rememberMe }, () => {
  //     setError('username', {
  //       type: 'manual',
  //       message: 'Username or Password is invalid',
  //     });
  //   });
  // };

  // ** User
  const { user, isLoading } = useUser();

  const classes = useStyles();

  const mouse = useRef([0, 0]);

  useEffect(() => {
    if (window.localStorage.getItem('createAccount') === 'true' && user) {
      registerToHolocruxe(user, auth);
      return;
    } else if (
      user &&
      !isLoading &&
      window.localStorage.getItem('createAccount') !== 'true'
    ) {
      loginToHolocruxe(user, auth);
    }
  }, [user, isLoading, auth]); // agregue isLoading y auth, porque me lo marcaba como error (gianni)

  return (
    <Box component="div" sx={{ width: '100vw', height: '100dvh' }}>
      {!hidden ? (
        <Canvas shadows>
          <group rotation={[0, 0, Math.PI / 5]}>
            <Stars count={2500} speed={1} />
          </group>
          <PerspectiveCamera
            makeDefault
            position={[0, 5.5, 11]}
            fov={73}
            key={undefined}
            clear={undefined}
            scale={undefined}
            zoom={undefined}
            add={undefined}
            visible={undefined}
            clone={undefined}
            copy={undefined}
            view={undefined}
            quaternion={undefined}
            attach={undefined}
            args={undefined}
            onUpdate={undefined}
            up={undefined}
            rotation={undefined}
            matrix={undefined}
            layers={undefined}
            dispose={undefined}
            raycast={undefined}
            id={undefined}
            onClick={undefined}
            onContextMenu={undefined}
            onDoubleClick={undefined}
            onPointerDown={undefined}
            onPointerMove={undefined}
            onPointerUp={undefined}
            onPointerCancel={undefined}
            onPointerEnter={undefined}
            onPointerLeave={undefined}
            onPointerOver={undefined}
            onPointerOut={undefined}
            onWheel={undefined}
            name={undefined}
            type={undefined}
            onPointerMissed={undefined}
            parent={undefined}
            toJSON={undefined}
            uuid={undefined}
            modelViewMatrix={undefined}
            normalMatrix={undefined}
            matrixWorld={undefined}
            matrixAutoUpdate={undefined}
            matrixWorldAutoUpdate={undefined}
            matrixWorldNeedsUpdate={undefined}
            castShadow={undefined}
            receiveShadow={undefined}
            frustumCulled={undefined}
            renderOrder={undefined}
            animations={undefined}
            userData={undefined}
            customDepthMaterial={undefined}
            customDistanceMaterial={undefined}
            isObject3D={undefined}
            onBeforeRender={undefined}
            onAfterRender={undefined}
            applyMatrix4={undefined}
            applyQuaternion={undefined}
            setRotationFromAxisAngle={undefined}
            setRotationFromEuler={undefined}
            setRotationFromMatrix={undefined}
            setRotationFromQuaternion={undefined}
            rotateOnAxis={undefined}
            rotateOnWorldAxis={undefined}
            rotateX={undefined}
            rotateY={undefined}
            rotateZ={undefined}
            translateOnAxis={undefined}
            translateX={undefined}
            translateY={undefined}
            translateZ={undefined}
            localToWorld={undefined}
            worldToLocal={undefined}
            lookAt={undefined}
            remove={undefined}
            removeFromParent={undefined}
            getObjectById={undefined}
            getObjectByName={undefined}
            getObjectByProperty={undefined}
            getObjectsByProperty={undefined}
            getWorldPosition={undefined}
            getWorldQuaternion={undefined}
            getWorldScale={undefined}
            getWorldDirection={undefined}
            traverse={undefined}
            traverseVisible={undefined}
            traverseAncestors={undefined}
            updateMatrix={undefined}
            updateMatrixWorld={undefined}
            updateWorldMatrix={undefined}
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
            matrixWorldInverse={undefined}
            projectionMatrix={undefined}
            projectionMatrixInverse={undefined}
            isCamera={undefined}
            near={undefined}
            far={undefined}
            isPerspectiveCamera={undefined}
            aspect={undefined}
            focus={undefined}
            filmGauge={undefined}
            filmOffset={undefined}
            setFocalLength={undefined}
            getFocalLength={undefined}
            getEffectiveFOV={undefined}
            getFilmWidth={undefined}
            getFilmHeight={undefined}
            setViewOffset={undefined}
            clearViewOffset={undefined}
            updateProjectionMatrix={undefined}
            setLens={undefined}
          ></PerspectiveCamera>
          <Particles count={600} mouse={mouse} />
          <Environment files="/images/login-bg/bg.hdr" background blur={0.5} />
          <HoloplanetCanvas />
          <BotCanvas />
          {/* <Holoplanet /> */}
        </Canvas>
      ) : null}
      <RightWrapper
        sx={
          skin === 'bordered' && !hidden
            ? {
                borderLeft: `1px solid ${theme.palette.divider}`,
                opacity: 0.8,
              }
            : {}
        }
      >
        <Box
          component="div"
          sx={{
            top: 30,
            left: 34,
            display: 'flex',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <HolocruxeLogo />
        </Box>

        <Box
          component="div"
          sx={{
            p: 9,
            marginTop: 50,
            height: '60%',
            width: '28rem',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(32, 67, 94, 0.5)',
            position: 'absolute',
            backdropFilter: 'blur(2px)',
            top: 0,
            right: 40,
          }}
        >
          <BoxWrapper>
            <Box component="div" sx={{ my: 6, textAlign: 'center' }}>
              <TypographyStyled variant="h5">
                Bienvenido a Holocruxe
              </TypographyStyled>
              <Icon sx={{ position: 'absolute', right: 54, top: 100 }}>
                <Rocket />
              </Icon>
              <Typography
                variant="body2"
                sx={{ marginTop: 4, color: 'text.secondary' }}
              >
                Ingresa a tu cuenta y dale vida a tus momentos
              </Typography>
            </Box>

            <form
              noValidate
              autoComplete="off"
              // onSubmit={handleSubmit(onSubmit)}
            >
              <Button
                fullWidth
                size="large"
                href={'/api/auth/login'}
                variant="contained"
                sx={{ mt: 9, mb: 3 }}
              >
                Iniciar Sesión
              </Button>

              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ mr: 2, color: 'text.secondary' }}>
                  Eres nuevo en la plataforma?
                </Typography>
                <Typography
                  onClick={() => {
                    window.localStorage.setItem('createAccount', 'true');
                    window.location.href = '/api/auth/login';
                  }}
                  href="/api/auth/login"
                  component={Link}
                  sx={{ textDecoration: 'none' }}
                >
                  Regístrate
                </Typography>
              </Box>

              <Box component="div" sx={{ my: 3 }}>
                <FormControlLabel
                  label="Recordarme"
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                />
              </Box>

              <Divider
                sx={{
                  '& .MuiDivider-wrapper': { px: 4 },
                  mt: (theme) => `${theme.spacing(5)} !important`,
                  mb: (theme) => `${theme.spacing(7.5)} !important`,
                }}
              >
                or
              </Divider>

              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconButton
                  href="/api/auth/login"
                  component={Link}
                  className={classes.iconButton}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="/api/auth/login"
                  component={Link}
                  className={classes.iconButton}
                >
                  <GoogleIcon />
                </IconButton>
                <IconButton
                  href="/api/auth/login"
                  component={Link}
                  className={classes.iconButton}
                >
                  <LinkedinIcon />
                </IconButton>
              </Box>
            </form>
          </BoxWrapper>
        </Box>

        {/* <BoxWrapper> */}
        {/* <Box component='div'
              sx={{
                top: 30,
                left: 40,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            > */}
        {/* <svg
                width={47}
                fill="none"
                height={26}
                viewBox="0 0 268 150"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  rx="25.1443"
                  width="50.2886"
                  height="143.953"
                  fill={theme.palette.primary.main}
                  transform="matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"
                />
                <rect
                  rx="25.1443"
                  width="50.2886"
                  height="143.953"
                  fillOpacity="0.4"
                  fill="url(#paint0_linear_7821_79167)"
                  transform="matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"
                />
                <rect
                  rx="25.1443"
                  width="50.2886"
                  height="143.953"
                  fill={theme.palette.primary.main}
                  transform="matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"
                />
                <rect
                  rx="25.1443"
                  width="50.2886"
                  height="143.953"
                  fill={theme.palette.primary.main}
                  transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
                />
                <rect
                  rx="25.1443"
                  width="50.2886"
                  height="143.953"
                  fillOpacity="0.4"
                  fill="url(#paint1_linear_7821_79167)"
                  transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
                />
                <rect
                  rx="25.1443"
                  width="50.2886"
                  height="143.953"
                  fill={theme.palette.primary.main}
                  transform="matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"
                />
                <defs>
                  <linearGradient
                    y1="0"
                    x1="25.1443"
                    x2="25.1443"
                    y2="143.953"
                    id="paint0_linear_7821_79167"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    y1="0"
                    x1="25.1443"
                    x2="25.1443"
                    y2="143.953"
                    id="paint1_linear_7821_79167"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg> */}
        {/* <Typography
                variant="h6"
                sx={{
                  ml: 2,
                  lineHeight: 1,
                  fontWeight: 700,
                  fontSize: '1.5rem !important',
                }}
              >
                {themeConfig.templateName}
              </Typography> */}
        {/* </Box> */}
        {/* <Box component='div' sx={{ mb: 6 }}>
              <TypographyStyled variant="h5">{`Welcome to ${themeConfig.templateName}! 👋🏻`}</TypographyStyled>
              <Typography variant="body2">
                Please sign-in to your account and start the adventure
              </Typography>
            </Box> */}
        {/* <Alert
              icon={false}
              sx={{
                py: 3,
                mb: 6,
                ...bgColors.primaryLight,
                '& .MuiAlert-message': { p: 0 },
              }}
            >
              <Typography
                variant="caption"
                sx={{ mb: 2, display: 'block', color: 'primary.main' }}
              >
                Admin: <strong>admin@materialize.com</strong> / Pass:{' '}
                <strong>admin</strong>
              </Typography>
              <Typography
                variant="caption"
                sx={{ display: 'block', color: 'primary.main' }}
              >
                Client: <strong>client@materialize.com</strong> / Pass:{' '}
                <strong>client</strong>
              </Typography>
            </Alert> */}
        {/* <form
              noValidate
              autoComplete="off"
              // onSubmit={handleSubmit(onSubmit)}
            > */}
        {/* <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label="username"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.username)}
                      placeholder="admin@materialize.com"
                    />
                  )}
                />
                {errors.username && (
                  <FormHelperText sx={{ color: 'error.main' }}>
                    {errors.username.message}
                  </FormHelperText>
                )}
              </FormControl> */}
        {/*  <FormControl fullWidth>
                <InputLabel
                  htmlFor="auth-login-v2-password"
                  error={Boolean(errors.password)}
                >
                  Password
                </InputLabel>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label="Password"
                      onChange={onChange}
                      id="auth-login-v2-password"
                      error={Boolean(errors.password)}
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <Icon
                              icon={
                                showPassword
                                  ? 'mdi:eye-outline'
                                  : 'mdi:eye-off-outline'
                              }
                              fontSize={20}
                            />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: 'error.main' }} id="">
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              */}
        {/* <Box component='div'
                sx={{
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}
              >
                <FormControlLabel
                  label="Remember Me"
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                />
                <Typography
                  variant="body2"
                  component={Link}
                  href="/forgot-password"
                  sx={{ color: 'primary.main', textDecoration: 'none' }}
                >
                  Forgot Password?
                </Typography>
              </Box> */}
        {/* <Button
                onClick={() => {
                  window.localStorage.removeItem('createAccount');
                  window.location.href = '/api/auth/login';
                }}
                fullWidth
                size="large"
                variant="contained"
                sx={{ mb: 7 }}
              >
                Login
              </Button> */}
        {/* <Box component='div'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ mr: 2, color: 'text.secondary' }}>
                  New on our platform?
                </Typography>
                <Typography
                  onClick={() => {
                    window.localStorage.setItem('createAccount', 'true');
                    window.location.href = '/api/auth/login';
                  }}
                  sx={{ color: 'primary.main', textDecoration: 'none' }}
                >
                  Create an account
                </Typography>
              </Box> */}
        {/* <Divider
                sx={{
                  '& .MuiDivider-wrapper': { px: 4 },
                  mt: (theme) => `${theme.spacing(5)} !important`,
                  mb: (theme) => `${theme.spacing(7.5)} !important`,
                }}
              >
                {/* or */}
        {/* </Divider>  */}
        {/*<Box component='div'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconButton
                  href="/"
                  component={Link}
                  sx={{ color: '#497ce2' }}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Icon icon="mdi:facebook" />
                </IconButton>
                <IconButton
                  href="/"
                  component={Link}
                  sx={{ color: '#1da1f2' }}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Icon icon="mdi:twitter" />
                </IconButton>
                <IconButton
                  href="/"
                  component={Link}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === 'light' ? '#272727' : 'grey.300',
                  }}
                >
                  <Icon icon="mdi:github" />
                </IconButton>
                <IconButton
                  href="/api/auth/login"
                  component={Link}
                  sx={{ color: '#db4437' }}
                >
                  <Icon icon="mdi:google" />
                </IconButton>
              </Box> */}
        {/* </form> */}
        {/* </BoxWrapper> */}
        {/* </Box> */}
      </RightWrapper>
    </Box>
  );
};

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

LoginPage.guestGuard = true;

export default LoginPage;
