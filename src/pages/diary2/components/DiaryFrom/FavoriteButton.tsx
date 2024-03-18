import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDiaryContext } from '../../context/DiaryContext';

const FavoriteButton = () => {
  const { changeDiaryPost, diaryPost } = useDiaryContext();
  const { favorite } = diaryPost;

  const changeDiaryFavorite = () => {
    changeDiaryPost({ ...diaryPost, favorite: !favorite });
  };
  return (
    <>
      {favorite ? (
        <FavoriteIcon fontSize="large" color="error" onClick={changeDiaryFavorite} sx={{ cursor: 'pointer' }} />
      ) : (
        <FavoriteBorderIcon fontSize="large" onClick={changeDiaryFavorite} sx={{ cursor: 'pointer' }} />
      )}
    </>
  );
};

export default FavoriteButton;
