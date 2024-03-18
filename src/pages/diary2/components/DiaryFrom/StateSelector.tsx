import { Box, MenuItem, Select } from '@mui/material';
import ArtIcon from 'src/@core/components/icon/diary/ArtIcon';
import emotions from 'src/@core/utils/emotions';
import { useDiaryContext } from '../../context/DiaryContext';

const StateSelector = () => {
  const { changeDiaryPost, diaryPost } = useDiaryContext();
  const { state: emojiState } = diaryPost;

  const changeDiaryPostState = (e: any) => {
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
          <MenuItem key={e.name} value={e.value}>
            {e.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default StateSelector;
