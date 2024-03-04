import { NewSingleCard } from './NewSingleCard';
import { NewsInfoCard } from './NewsInfoCard';
import { NewsLocationCard } from './NewsLocationCard';
import { NewsShareCard } from './NewsShareCard';

interface NewsProps {
  title: string;
  description: string;
  image: string;
  rating?: string;
  variant?: 'location' | 'info' | 'single' | 'share';
}

export const NewsCard = ({ description, image, title, rating, variant = 'single' }: NewsProps) => {
  if (variant === 'location') {
    return <NewsLocationCard description={description} image={image} rating={rating} title={title} />;
  }

  if (variant === 'info') {
    return <NewsInfoCard description={description} image={image} title={title} />;
  }

  if (variant === 'single') {
    return <NewSingleCard description={description} image={image} title={title} />;
  }

  if (variant === 'share') {
    return <NewsShareCard description={description} image={image} title={title} />;
  }

  return null;
};
