import { Button, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { useDiaryContext } from '../context/DiaryContext';

export const DiaryForm = () => {
  const [message, setMessage] = useState('');
  const [emojiToggle, setEmojiToggle] = useState(false);

  const {  } = useDiaryContext();

  const handleEmojiSelect = (emoji: any) => {
    setMessage(message + emoji.native);
    setEmojiToggle(false);
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
        onChange={(e) => setMessage(e.target.value)}
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
      <Button variant="contained" sx={{ marginTop: 4 }}>
        Enviar
      </Button>
    </>
  );
};
