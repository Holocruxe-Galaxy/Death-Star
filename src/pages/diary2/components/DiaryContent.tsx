import { Box, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

const DiaryContent = () => {
  const [message, setMessage] = useState('');
  const [emojiToggle, setEmojiToggle] = useState(false);

  const handleEmojiSelect = (emoji: any) => {
    setMessage(message + emoji.native);
    setEmojiToggle(false);
  };

  const handleEditDiaryPost = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <TextField
      value={message}
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
