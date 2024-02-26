import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface NewsInfoCardProps {
  title: string;
  description: string;
  image: string;
}

export const NewsInfoCard = ({ title, description, image }: NewsInfoCardProps) => {
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
      <Button variant="contained" sx={{ borderRadius: 0 }} fullWidth>
        MAS INFO
      </Button>
    </Card>
  );
};
