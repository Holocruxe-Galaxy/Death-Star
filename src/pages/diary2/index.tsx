import { Grid, Paper } from '@mui/material';
import { DiaryActions } from './components/DiaryActions';
import { DiaryForm } from './components/DiaryForm';
import DiaryPost from './components/DiaryPost';
import { DiaryProvider } from './context/DiaryContext';
const Diary2 = () => {
  return (
    <DiaryProvider>
      <Paper sx={{ padding: 5 }}>
        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', padding: 3, borderRadius: 1 }}>
          <Grid item xs={9}>
            <DiaryForm />
          </Grid>
          <Grid item xs={3}>
            <DiaryActions />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <DiaryPost />
        </Grid>
      </Paper>
    </DiaryProvider>
  );
};

export default Diary2;
