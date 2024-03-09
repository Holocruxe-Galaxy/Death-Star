import { Button, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { useDiaryContext } from '../context/DiaryContext';

export const DiaryForm = () => {
  const [message, setMessage] = useState('');
  const [emojiToggle, setEmojiToggle] = useState(false);

  const { addDiaryPost, changeDiaryPost, diaryPost } = useDiaryContext();

  const handleEmojiSelect = (emoji: any) => {
    setMessage(message + emoji.native);
    setEmojiToggle(false);
  };

  const handleEditDiaryPost = (e: any) => {
    setMessage(e.target.value);
    changeDiaryPost({ ...diaryPost, content: message });
  };

  const handleSendPost = () => {
    console.log('send post');
    addDiaryPost(diaryPost);
    setMessage('');
  };

  return (
    <>
      <TextField
        value={message}
        label="¿Que hay de nuevo?"
        fullWidth
        multiline
        minRows={3}
        maxRows={10}
        onChange={(e) => handleEditDiaryPost(e)}
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
      <Button variant="contained" sx={{ marginTop: 4 }} onClick={handleSendPost}>
        Enviar
      </Button>
    </>
  );
};
