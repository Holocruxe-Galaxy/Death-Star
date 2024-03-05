import AttachFileIcon from '@mui/icons-material/AttachFile';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import ArtIcon from 'src/@core/components/icon/diary/ArtIcon';
import emotions from 'src/@core/utils/emotions';

export const DiaryActions = () => {
  const [toggleStar, setToggleStar] = useState(false);
  const [emojiState, setEmojiState] = useState('');
  return (
    <Box component="div" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
      {toggleStar ? (
        <StarIcon fontSize="large" onClick={() => setToggleStar(!toggleStar)} sx={{ cursor: 'pointer' }} />
      ) : (
        <StarBorderIcon fontSize="large" onClick={() => setToggleStar(!toggleStar)} sx={{ cursor: 'pointer' }} />
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
            setEmojiState(e.target.value);
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
