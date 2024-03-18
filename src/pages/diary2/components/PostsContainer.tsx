import { Grid } from '@mui/material';
import DiaryPost from './DiaryPost';
import { useDiaryContext } from '../context/DiaryContext';

const PostsContainer = () => {
  const { diaryPosts } = useDiaryContext();
  return (
    <Grid sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 5 }}>
      {diaryPosts.map((post) => (
        <DiaryPost key={post.userId} {...post} />
      ))}
    </Grid>
  );
};

export default PostsContainer;
