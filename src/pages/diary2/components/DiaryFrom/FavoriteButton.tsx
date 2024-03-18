import { useState } from 'react';
import { useDiaryContext } from '../../context/DiaryContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavoriteButton = () => {
  const [toggleFavorite, setToggleFavorite] = useState(false);

  const { changeDiaryPost, diaryPost } = useDiaryContext();

  const changeDiaryFavorite = () => {
    setToggleFavorite(!toggleFavorite);
    changeDiaryPost({ ...diaryPost, favorite: toggleFavorite });
  };
  return (
    <>
      {toggleFavorite ? (
        <FavoriteIcon fontSize="large" color="error" onClick={changeDiaryFavorite} sx={{ cursor: 'pointer' }} />
      ) : (
        <FavoriteBorderIcon fontSize="large" onClick={changeDiaryFavorite} sx={{ cursor: 'pointer' }} />
      )}
    </>
  );
};

export default FavoriteButton;
