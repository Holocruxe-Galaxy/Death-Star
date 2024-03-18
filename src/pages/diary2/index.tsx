import { Paper } from '@mui/material';
import { DiaryForm } from './components/DiaryFrom/DiaryForm';
import PostsContainer from './components/PostsContainer';
import { DiaryProvider } from './context/DiaryContext';
const Diary2 = () => {
  return (
    <DiaryProvider>
      <Paper sx={{ padding: 5 }}>
        <DiaryForm />
        <PostsContainer />
      </Paper>
    </DiaryProvider>
  );
};

export default Diary2;
