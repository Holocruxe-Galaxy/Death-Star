import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Grid, Paper, Typography } from '@mui/material';
import emotions from 'src/@core/utils/emotions';
// import { DiaryPost } from '../interfaces/diary-post.interface';

// TODO change strict properties to optional properties
interface DiaryPostProps {
  id?: string;
  content?: string;
  date?: string;
  state?: string;
  attachFile?: string[];
  // addPosts?: (posts: DiaryPost[]) => void;
}

const DiaryPost = ({ state }: DiaryPostProps) => {
  const fecha = new Date().getHours() + ':' + new Date().getMinutes() + ' ' + new Date().toDateString();
  // const { diaryPosts } = useDiaryContext();
  // addPosts(diaryPosts);
  return (
    <Paper elevation={17} sx={{ p: 5 }}>
      <Grid container>
        <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box component="div">
            <Typography variant="overline"> {fecha} </Typography>
          </Box>
          <Box component="div" sx={{ display: 'flex', gap: 5 }}>
            {state && <FavoriteIcon fontSize="medium" color="error" sx={{ cursor: 'pointer' }} />}
            <div>{emotions[4].value}</div>
            <EditOutlinedIcon fontSize="medium" sx={{ cursor: 'pointer' }} />
            <DeleteOutlineIcon fontSize="medium" sx={{ cursor: 'pointer' }} />
          </Box>
        </Grid>
        <Grid item>
          {/* //TODO add message post */}

          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta rerum explicabo voluptates, non, veniam
            facere nostrum eius quidem perspiciatis rem officiis, illum repellendus commodi quia. Esse modi voluptatum
            minus nulla.{' '}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DiaryPost;
