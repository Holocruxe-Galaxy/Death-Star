import AttachFileIcon from '@mui/icons-material/AttachFile';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import ArtIcon from 'src/@core/components/icon/diary/ArtIcon';
import emotions from 'src/@core/utils/emotions';
import { useDiaryContext } from '../context/DiaryContext';

export const DiaryActions = () => {
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [emojiState, setEmojiState] = useState('');
  const { changeDiaryPost, diaryPost } = useDiaryContext();

  const changeDiaryFavorite = () => {
    setToggleFavorite(!toggleFavorite);
    changeDiaryPost({ ...diaryPost, favorite: toggleFavorite });
  };

  const changeDiaryPostState = (e: any) => {
    setEmojiState(e.target.value);
    changeDiaryPost({ ...diaryPost, state: emojiState, favorite: toggleFavorite });
  };

  return (
    <Box component="div" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
      {toggleFavorite ? (
        <FavoriteIcon fontSize="large" color="error" onClick={changeDiaryFavorite} sx={{ cursor: 'pointer' }} />
      ) : (
        <FavoriteBorderIcon fontSize="large" onClick={changeDiaryFavorite} sx={{ cursor: 'pointer' }} />
      )}
      {/* <TheaterComedyIcon fontSize="large" /> */}
      <Box component="div">
        <Select
          id="select"
          value={emojiState || ''}
          sx={{
            height: '2.5rem',
            fontSize: '1.5rem',
            textAlign: 'center',
          }}
          onChange={(e) => {
            changeDiaryPostState(e);
          }}
          displayEmpty
          renderValue={(selected) => {
            if (selected === '' || !selected) {
              return <ArtIcon />;
            }

            return selected;
          }}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {emotions.map((e) => (
            <MenuItem key={e.value} value={e.value}>
              {e.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <AttachFileIcon fontSize="large" sx={{ cursor: 'pointer' }} />
    </Box>
  );
};
