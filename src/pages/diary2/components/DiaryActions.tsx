/* eslint-disable @typescript-eslint/no-unused-vars */
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Button, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import ArtIcon from 'src/@core/components/icon/diary/ArtIcon';
import emotions from 'src/@core/utils/emotions';
import { useDiaryContext } from '../context/DiaryContext';
import { VisuallyHiddenInput } from '../styles/VisuallyHiddenInput';

export const DiaryActions = () => {
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [emojiState, setEmojiState] = useState('');
  const [file, setFile] = useState<FormData>();
  const { changeDiaryPost, diaryPost } = useDiaryContext();

  const changeDiaryFavorite = () => {
    setToggleFavorite(!toggleFavorite);
    changeDiaryPost({ ...diaryPost, favorite: toggleFavorite });
  };

  const changeDiaryPostState = (e: any) => {
    setEmojiState(e.target.value);
    changeDiaryPost({ ...diaryPost, state: emojiState, favorite: toggleFavorite });
  };

  const fileSelected = (e: any) => {
    const file = e.target?.files?.[0];
    const formData = new FormData();
    formData.append('photos', file as unknown as string);
    setFile(formData);

    changeDiaryPost({ ...diaryPost, attachFiles: [file] });
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

      <Button
        component="label"
        endIcon={<AttachFileIcon />}
        sx={{
          color: 'white',
          backgroundColor: 'transparent',
          borderRadius: '50%',
          width: '2rem',
          height: '2rem',
          minWidth: 'auto',
          mr: 3.2,
          mt: 1,
        }}
      >
        <VisuallyHiddenInput type="file" accept="image/*" onChange={fileSelected} />
      </Button>
    </Box>
  );
};
