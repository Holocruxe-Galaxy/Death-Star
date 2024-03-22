// ** Imports Components Material-UI
import Grid from '@mui/system/Unstable_Grid/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

// ** Icon Imports
import Icon from 'src/@core/components/icon';
import MicNoneIcon from '@mui/icons-material/MicNone';

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.holocruxe.fontWhite, 0.8),
}));

const CustomSecondaryText = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.holocruxe.fontWhite, 0.6),
}));

const RecordingButton = styled(Button)(({ theme }) => ({
  width: '70px',
  height: '70px',
  backgroundColor: theme.palette.holocruxe.focus,
  border: `1px solid ${theme.palette.holocruxe.mediumText}`,
  borderRadius: '16px',
  '&:hover': {
    backgroundColor: theme.palette.holocruxe.bg,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.holocruxe.mediumText,
    marginRight: theme.spacing(1),
  },
}));

const CustomBackButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: `1px solid ${alpha(theme.palette.holocruxe.fontWhite, 0.6)}`,
  color: alpha(theme.palette.holocruxe.fontWhite, 0.6),
  '&:hover': {
    backgroundColor: theme.palette.holocruxe.darkText,
  },
}));

const CustomNextButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.holocruxe.btn,
  color: theme.palette.holocruxe.fontWhite,
  '&:hover': {
    backgroundColor: theme.palette.holocruxe.darkText,
  },
}));

const StepVoiceLegacy = ({ handleNext, handlePrev }: { [key: string]: () => void }) => {
  return (
    <>
      <Grid sx={{ mb: 2 }}>
        <CustomTypography variant="h5">Queremos conocerte</CustomTypography>
        <CustomSecondaryText>¿Con que te identificas?</CustomSecondaryText>
      </Grid>
      <Grid>
        <RecordingButton>
          <MicNoneIcon sx={{ width: '50px', height: '50px' }} />
        </RecordingButton>
      </Grid>
      <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
        <CustomBackButton
          variant="contained"
          onClick={handlePrev}
          startIcon={<Icon icon="mdi:chevron-left" fontSize={20} />}
        >
          Atrás
        </CustomBackButton>
        <CustomNextButton
          variant="contained"
          onClick={handleNext}
          endIcon={<Icon icon="mdi:chevron-right" fontSize={20} />}
        >
          Omitir
        </CustomNextButton>
      </Box>
    </>
  );
};

export default StepVoiceLegacy;
