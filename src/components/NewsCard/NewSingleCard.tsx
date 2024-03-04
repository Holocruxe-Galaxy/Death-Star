import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

interface NewSingleCardProps {
  title: string;
  description: string;
  image: string;
}

export const NewSingleCard = ({ title, description, image }: NewSingleCardProps) => {
  return (
    <Card sx={{ height: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.length < 400 ? description : description.slice(0, 400) + '...'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};
