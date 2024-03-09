import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

interface NewsShareCardProps {
  title: string;
  description: string;
  image: string;
}

export const NewsShareCard = ({ title, description, image }: NewsShareCardProps) => {
  return (
    <Paper sx={{ display: 'flex', height: 300 }}>
      <Box component="div" alignSelf="center" margin={5}>
        <img src={image} alt="" />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box component="div" padding={5} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
        <Typography fontSize={22} fontWeight={600}>
          {title}
        </Typography>
        <Typography marginY={3}>
          {description.length < 300 ? description : description.slice(0, 300) + '...'}
        </Typography>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button>MÁS INFO</Button>
          <ShareIcon />
        </Box>
      </Box>
    </Paper>
  );
};
