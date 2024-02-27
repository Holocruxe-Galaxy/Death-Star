import { Box, Button, Paper, Stack, Typography } from '@mui/material';

interface NewsLocationCardProps {
  title: string;
  rating?: string;
  description: string;
  image: string;
}
export const NewsLocationCard = ({ title, image, rating, description }: NewsLocationCardProps) => {
  return (
    <Paper sx={{ padding: 10, marginTop: 5, display: 'flex', maxWidth: 600 }}>
      <Stack spacing={6} direction={'row'}>
        <Box component={'div'}>
          <Stack spacing={6}>
            <Typography>{title}</Typography>
            <Box component="div">
              {/* After change dynamic starts */}
              <img src="https://i.imgur.com/PP7yTNd.png" alt="" />
              <Typography> {rating} </Typography>
              <Typography>{description}</Typography>
            </Box>
            <Box component="div">
              <Button>UBICACIÓN</Button>
              <Button>RESEÑAS</Button>
            </Box>
          </Stack>
        </Box>
        <Box component="div" alignSelf="center">
          <img src={image} alt="" />
        </Box>
      </Stack>
    </Paper>
  );
};
