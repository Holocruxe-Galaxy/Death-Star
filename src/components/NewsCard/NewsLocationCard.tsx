import { Box, Button, Paper, Typography } from '@mui/material';

interface NewsLocationCardProps {
  title: string;
  rating?: string;
  description: string;
  image: string;
}
export const NewsLocationCard = ({ title, image, rating, description }: NewsLocationCardProps) => {
  return (
    <Paper sx={{ display: 'flex', gap: 3, padding: 5, height: 300 }}>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography gutterBottom fontSize={22} fontWeight={600} component="div">
          {title}
        </Typography>
        {/* After change dynamic starts */}
        <Box component="div">
          <img src="https://i.imgur.com/PP7yTNd.png" alt="" />
        </Box>
        <Typography> {rating} </Typography>
        <Typography>{description.length < 200 ? description : description.slice(0, 200) + '...'}</Typography>
        <Box component="div">
          <Button>UBICACIÓN</Button>
          <Button>RESEÑAS</Button>
        </Box>
      </Box>
      <Box component="div" alignSelf="center">
        <img src={image} alt="" />
      </Box>
    </Paper>
  );
};

// <Card sx={{ maxWidth: 600, height: 450, display: 'flex' }}>
//   <CardActionArea>
//     {/* <CardMedia component="img" height="200" image={image} alt="green iguana" /> */}
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div">
//         {title}
//       </Typography>

//       <Typography variant="body2" color="text.secondary">
//         {description}
//       </Typography>
//     </CardContent>
//   </CardActionArea>
//   <CardActions>

//   </CardActions>
//   <img src={image} alt="" />
// </Card>
