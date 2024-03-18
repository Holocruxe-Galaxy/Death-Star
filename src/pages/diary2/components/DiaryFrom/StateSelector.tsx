import { Box, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import ArtIcon from 'src/@core/components/icon/diary/ArtIcon';
import { useDiaryContext } from '../../context/DiaryContext';
import emotions from 'src/@core/utils/emotions';

const StateSelector = () => {
  const [emojiState, setEmojiState] = useState('');
  const { changeDiaryPost, diaryPost } = useDiaryContext();

  const changeDiaryPostState = (e: any) => {
    setEmojiState(e.target.value);
    changeDiaryPost({ ...diaryPost, state: e.target.value });
  };
  return (
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
  );
};

export default StateSelector;
