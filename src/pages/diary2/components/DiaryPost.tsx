import { Avatar, Box, Grid, Paper } from '@mui/material';

// TODO change strict properties to optional properties
interface DiaryPostProps {
  id?: string;
  content?: string;
  date?: string;
  state?: string;
  attachFile?: string;
}

const DiaryPost = ({ id, content, date, state, attachFile }: DiaryPostProps) => {
  return (
    <Paper sx={{ p: 5 }}>
      <Grid container>
        <Grid item>
          {/* //TODO add tow box, user data and  options post */}
          <Box component="div">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} />
          </Box>
        </Grid>
        <Grid item>{/* //TODO add message post */}</Grid>
      </Grid>
      <div>DiaryPost</div>
    </Paper>
  );
};

export default DiaryPost;
