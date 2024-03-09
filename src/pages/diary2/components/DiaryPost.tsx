import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';

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
    <Paper elevation={17} sx={{ p: 5 }}>
      <Grid container>
        <Grid item sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box component="div">
            <Typography variant="overline"> 6 de Marzo del 2024 </Typography>
          </Box>
          <Box component="div">delete</Box>
        </Grid>
        <Grid item>
          {/* //TODO add message post */}

          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus libero ipsum voluptatum, debitis
            autem ipsa magni deleniti veniam quas non odio excepturi culpa commodi nam soluta praesentium consequuntur
            ex pariatur!
          </Typography>
        </Grid>
      </Grid>
      <div>DiaryPost</div>
    </Paper>
  );
};

export default DiaryPost;
