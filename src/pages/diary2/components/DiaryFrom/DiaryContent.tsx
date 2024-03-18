import { Box, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { useDiaryContext } from '../../context/DiaryContext';

const DiaryContent = () => {
  const [emojiToggle, setEmojiToggle] = useState(false);

  const { changeDiaryPost, diaryPost } = useDiaryContext();
  const { content } = diaryPost;

  const handleEmojiSelect = (emoji: any) => {
    changeDiaryPost({ ...diaryPost, content: content + emoji.native });
    setEmojiToggle(false);
  };

  const handleEditDiaryPost = (e: any) => {
    changeDiaryPost({ ...diaryPost, content: e.target.value });
  };

  return (
    <TextField
      value={content}
      label="¿Que hay de nuevo?"
      fullWidth
      multiline
      minRows={3}
      maxRows={10}
      onChange={handleEditDiaryPost}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box
              component="div"
              onClick={() => {
                setEmojiToggle(!emojiToggle);
              }}
              sx={{ cursor: 'pointer' }}
            >
              🙂
            </Box>
            {emojiToggle && <Picker data={data} onEmojiSelect={handleEmojiSelect} />}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default DiaryContent;
