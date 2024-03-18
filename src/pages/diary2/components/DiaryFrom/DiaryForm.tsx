import { Button, Grid } from '@mui/material';
import { useDiaryContext } from '../../context/DiaryContext';
import DiaryContent from './DiaryContent';
import AttachFileButton from './AttachFileButton';
import FavoriteButton from './FavoriteButton';
import StateSelector from './StateSelector';

export const DiaryForm = () => {
  const { addDiaryPost, diaryPost, changeDiaryPost } = useDiaryContext();

  const handleSendPost = () => {
    addDiaryPost(diaryPost);
    console.log(diaryPost);
    changeDiaryPost({
      content: '',
      state: '',
      attachFiles: [],
      date: '',
      favorite: false,
      userId: '',
    });
  };

  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Grid item xs={8}>
        <DiaryContent />
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', gap: 3, mt: 8 }}>
        <FavoriteButton />
        <StateSelector />
        <AttachFileButton />
      </Grid>
      <Button variant="contained" sx={{ marginTop: 4 }} onClick={handleSendPost}>
        Enviar
      </Button>
    </Grid>
  );
};
