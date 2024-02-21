// ** React Imports
import { useState, ReactNode } from 'react';

// ** MUI Imports
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';

// ** Icon Imports
import Icon from 'src/@core/components/icon';

// ** Import Logo
import HolocruxeLogo from 'src/@core/icons/login/HolocruxeLogo';

// ** Step Components
import StepOne from 'src/@core/components/register/StepOne';

// ** Custom Component Import
import StepperCustomDot from 'src/@core/components/register/StepperCustomDot';
import BlankLayout from 'src/@core/layouts/BlankLayout';

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper';

// ** Hooks
import { useAuth } from 'src/hooks/useAuth';
import { useRouter } from 'next/router';

// ** Import ChatBot
import ChatBotIcon from 'src/@core/components/Chat-Icon/Chat-Icon';
import Chat from 'src/@core/components/ChatComponent/ChatComponent';

const steps = [
  {
    title: 'Personal',
    subtitle: 'Ingresar información',
  },
  {
    title: 'Intereses',
    subtitle: 'Algunas preguntas',
  },
  {
    title: 'Legado de Voz',
    subtitle: 'Cuéntanos algo',
  },
];

const Register = () => {
  // ** States
  const router = useRouter();
  const [activeStep, setActiveStep] = useState<number>(0);
  const { logout } = useAuth();
  const [, setAnchorEl] = useState<Element | null>(null);

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url);
    }
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleDropdownClose();
  };

  // Handle Stepper
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  // const handlePrev = () => {
  //   if (activeStep !== 0) {
  //     setActiveStep(activeStep - 1);
  //   }
  // };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <StepOne handleNext={handleNext} />;
      case 1:
        return;
      case 2:

      default:
        return null;
    }
  };

  const renderContent = () => {
    return getStepContent(activeStep);
  };

  return (
    <>
      <Box component="div" display="flex" justifyContent="space-between">
        <ChatBotIcon></ChatBotIcon>
        <Chat></Chat>
        <Box component="div">
          <HolocruxeLogo />
        </Box>
        <Box component="div">
          <MenuItem
            onClick={handleLogout}
            sx={{
              py: 2,
              '& svg': { mr: 2, fontSize: '1.375rem', color: 'text.primary' },
            }}
          >
            <Icon icon="mdi:logout-variant" />
          </MenuItem>
        </Box>
      </Box>
      <Card sx={{ textAlign: 'center' }}>
        <StepperWrapper sx={{ mb: 10 }}>
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel StepIconComponent={StepperCustomDot}>
                    <div className="step-label">
                      <Typography className="step-number">
                        {`0${index + 1}`}
                      </Typography>
                      <div>
                        <Typography className="step-title">
                          {step.title}
                        </Typography>
                        <Typography className="step-subtitle">
                          {step.subtitle}
                        </Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </StepperWrapper>
        {renderContent()}
      </Card>
    </>
  );
};

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;
Register.guestGuard = true;

export default Register;
