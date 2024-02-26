import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

interface NewSingleCardProps {
  title: string;
  description: string;
  image: string;
}

export const NewSingleCard = ({ title, description, image }: NewSingleCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};
