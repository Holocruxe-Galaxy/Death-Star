import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface NewsInfoCardProps {
  title: string;
  description: string;
  image: string;
}

export const NewsInfoCard = ({ title, description, image }: NewsInfoCardProps) => {
  const mensaje = 'Hola mundo';

  console.log(mensaje.length);
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.length < 200 ? description : description.slice(0, 200) + '...'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="contained" sx={{ borderRadius: 0, height: 60 }} fullWidth>
        MAS INFO
      </Button>
    </Card>
  );
};
