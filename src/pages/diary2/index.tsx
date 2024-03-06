import { Grid, Paper } from '@mui/material';
import { DiaryForm } from './components/DiaryForm';
import { DiaryActions } from './components/DiaryActions';
import DiaryPost from './components/DiaryPost';
const Diary2 = () => {
  return (
    <>
      <Paper sx={{ padding: 5 }}>
        <Grid
          container
          spacing={2}
          sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#20435E', padding: 3, borderRadius: 1 }}
        >
          <Grid item xs={9}>
            <DiaryForm />
          </Grid>
          <Grid item xs={3}>
            <DiaryActions />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 5 }}>
          <DiaryPost />
        </Grid>
      </Paper>
    </>
  );
};

export default Diary2;
