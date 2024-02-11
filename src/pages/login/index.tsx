// ** React Imports
import { useEffect, useState, ReactNode, useRef } from 'react';

// ** Next Imports
import Link from 'next/link';

// ** MUI Components
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Box, { BoxProps } from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiFormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';

// ** Auth0 user Import
import { useUser } from '@auth0/nextjs-auth0/client';

// ** Threejs Imports

import { Canvas } from '@react-three/fiber';
import { Environment, Stars, PerspectiveCamera } from '@react-three/drei';
import HoloplanetCanvas from '../../@core/components/login/models/Holoplanet';
import BotCanvas from '../../@core/components/login/models/Officialbot';
import Particles from '../../@core/components/login/adds/Particles';

// import { makeStyles } from '@mui/styles';

// ** Icon Imports
// import Icon from 'src/@core/components/icon';
import FacebookIcon from 'src/@core/icons/login/FacebookIcon';
import GoogleIcon from 'src/@core/icons/login/GoogleIcon';

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
// import { Icon } from '@mui/material';
// import Rocket from 'src/@core/icons/login/Rocket';
import HolocruxeLogo from '../../@core/icons/login/HolocruxeLogo';

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

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true);

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

  // ** User
  const { user, isLoading } = useUser();

  const mouse = useRef([0, 0]);

  useEffect(() => {
    if (window.localStorage.getItem('createAccount') === 'true' && user) {
      auth.setLoading(true);
      registerToHolocruxe(user, auth);
      return;
    } else if (
      user &&
      !isLoading &&
      window.localStorage.getItem('createAccount') !== 'true'
    ) {
      auth.setLoading(true);
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
            // no borrar propiedades en PerspectiveCamera, por algún motivo rompe el código en el build
          ></PerspectiveCamera>
          <Particles count={600} mouse={mouse} />
          <Environment files="/images/login-bg/bg.hdr" background blur={0.3} />
          <HoloplanetCanvas />
          <BotCanvas />
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
            boxSizing: 'border-box',
            p: 9,
            marginTop: 50,
            height: '60%',
            width: '28rem',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'holocruxe.bg',
            position: 'absolute',
            backdropFilter: 'blur(7px)',
            top: 0,
            right: 40,
            boxShadow: '2px 2px 12px -3px rgba(255, 255, 255, 0.5)',
          }}
        >
          <BoxWrapper>
            <Box component="div" sx={{ mt: 10, textAlign: 'center' }}>
              <TypographyStyled
                variant="h5"
                sx={{ color: 'holocruxe.fontWhite' }}
              >
                Bienvenid@s! 👋🏻
              </TypographyStyled>
              <Typography
                variant="body2"
                sx={{ marginTop: 0, color: 'holocruxe.fontWhite' }}
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
                onClick={() => {
                  window.localStorage.removeItem('createAccount');
                  window.location.href = '/api/auth/login';
                }}
                fullWidth
                size="large"
                variant="contained"
                sx={{
                  mt: 9,
                  mb: 3,
                  bgcolor: 'holocruxe.btn',
                  '&:hover': { bgcolor: 'holocruxe.darkText' },
                }}
              >
                Iniciar Sesión
              </Button>

              <Box
                component="div"
                sx={{
                  mt: 0,
                  mb: 10,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <FormControlLabel
                  sx={{
                    '.MuiFormControlLabel-label': {
                      color: 'holocruxe.fontWhite',
                    },
                  }}
                  label="Recordarme"
                  control={
                    <Checkbox
                      size="medium"
                      sx={{
                        color: 'holocruxe.fontWhite',
                        '&.Mui-checked': {
                          color: 'holocruxe.btn',
                        },
                      }}
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                  }
                />
                <Typography
                  onClick={(e) => {
                    window.localStorage.removeItem('createAccount');
                    e.preventDefault();
                    window.location.href =
                      'https://support.google.com/accounts/answer/7682439?hl=es-419';
                  }}
                  href={'/'}
                  component={Link}
                  sx={{
                    textDecoration: 'none',
                    color: 'holocruxe.btn',
                    textAlign: 'rigth',
                    '&:hover': { color: 'holocruxe.darkText' },
                  }}
                >
                  Olvidaste tu contraseña?
                </Typography>
              </Box>

              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ mr: 2, color: 'holocruxe.fontWhite' }}>
                  Eres nuev@ en la plataforma?
                </Typography>
                <Typography
                  onClick={(e) => {
                    e.preventDefault();
                    window.localStorage.setItem('createAccount', 'true');
                    window.location.href = '/api/auth/login';
                  }}
                  href={'/'}
                  component={Link}
                  sx={{
                    textDecoration: 'none',
                    color: 'holocruxe.btn',
                    '&:hover': { color: 'holocruxe.darkText' },
                  }}
                >
                  Regístrate
                </Typography>
              </Box>

              <Divider
                sx={{
                  '& .MuiDivider-wrapper': { px: 4 },
                  mt: (theme) => `${theme.spacing(5)} !important`,
                  mb: (theme) => `${theme.spacing(7.5)} !important`,
                }}
              >
                O
              </Divider>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  position: 'relative',
                  bottom: 20,
                }}
              >
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    window.localStorage.removeItem('createAccount');
                    window.location.href = '/api/auth/login';
                  }}
                  href="/api/auth/login"
                  component={Link}
                  // className={classes.iconButton}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.preventDefault();
                    window.localStorage.removeItem('createAccount');
                    window.location.href = '/api/auth/login';
                  }}
                  href="/api/auth/login"
                  component={Link}
                  // className={classes.iconButton}
                >
                  <GoogleIcon />
                </IconButton>
              </Box>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  );
};

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

LoginPage.guestGuard = true;

export default LoginPage;
