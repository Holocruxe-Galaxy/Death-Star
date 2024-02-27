import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { useForm, Controller, useFieldArray } from 'react-hook-form';

// ** Material UI
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Modal,
  Box,
  Button,
  Typography,
  FormControl,
  TextField,
  Switch,
  Select,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { makeStyles } from '@mui/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

// ** Redux Toolkit
import { deleteDiary, editEntrie } from 'src/store/diary';

// ** Emoji Picker
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

// ** Utils
import emotions from 'src/@core/utils/emotions';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url()`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#59C1BD' : '#59C1BD',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url()`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const useStyles = makeStyles(() => ({
  picker: {
    position: 'absolute',
    top: 60,
    zIndex: 9999,
  },
}));

const Entries = ({ id, props }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const contentRef = useRef<HTMLInputElement>(props.content);
  const favoriteRef = useRef<HTMLElement>(props.favorite);
  const emojiRef = useRef<HTMLSelectElement>(props.emoji);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isPickerVisible, setPickerVisible] = useState<boolean | null>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      content: props.content,
      emoji: props.emoji,
      photos: props.photos,
      favorite: props.favorite,
    },
  });
  const { fields, remove } = useFieldArray({
    control,
    name: 'photos',
  });

  const onSubmit = (data: any) => {
    if (data.emoji === undefined) delete data.emoji;

    if (!data.photos.length && !props.photos.length) delete data.photos;

    dispatch(editEntrie({ ...data, _id: id }));
    handleCloseEdit();
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    dispatch(deleteDiary(id));
  };

  const handleEmojiSelect = (emoji: any) => {
    if (inputRef.current && isPickerVisible) {
      console.log(inputRef.current);
      inputRef.current.value += emoji.native;
    }

    setPickerVisible(!isPickerVisible);
  };

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

  const styleEdit = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
  };

  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
        action={
          <>
            {props.emoji && <IconButton>{props.emoji}</IconButton>}
            {props.favorite && (
              <Tooltip title="Tu publicación se encuentra dentro de tus favoritos" placement="top">
                <IconButton>
                  <RocketLaunchIcon />
                </IconButton>
              </Tooltip>
            )}

            <Tooltip title="Editar publicación" placement="top">
              <IconButton onClick={handleOpenEdit}>
                <EditNoteIcon />
              </IconButton>
            </Tooltip>

            <Modal open={openEdit} onClose={handleCloseEdit}>
              <Box component="div" sx={styleEdit}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl>
                    <Controller
                      name="content"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <TextField
                          value={value}
                          onChange={onChange}
                          inputRef={contentRef}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment position="end" sx={{ display: 'flex' }}>
                                {!isPickerVisible ? (
                                  ''
                                ) : (
                                  <Card className={classes.picker}>
                                    <Picker
                                      data={data}
                                      emojiTooltip
                                      perLine={10}
                                      maxFrequentRows={0}
                                      searchPosition="none"
                                      onEmojiSelect={handleEmojiSelect}
                                    />
                                  </Card>
                                )}
                              </InputAdornment>
                            ),
                          }}
                        ></TextField>
                      )}
                    />
                    <Controller
                      name="favorite"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <MaterialUISwitch checked={value} onChange={onChange} inputRef={favoriteRef}></MaterialUISwitch>
                      )}
                    />
                    <Controller
                      name="emoji"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Select
                          value={value}
                          onChange={onChange}
                          inputRef={emojiRef}
                          id="select"
                          variant="standard"
                          sx={{ marginRight: 5 }}
                          displayEmpty
                          renderValue={(selected) => {
                            if (selected === '' || !selected) {
                              return <EmojiEmotionsIcon sx={{ paddingTop: 1, paddingLeft: 3 }} />;
                            }

                            return selected;
                          }}
                          inputProps={{ 'aria-label': 'Without label' }}
                        >
                          {emotions.map((e) => (
                            <MenuItem key={e.value} value={e.value}>
                              {e.name}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />

                    {props.photos && props.photos.length > 0 && (
                      <>
                        {fields.map((field, index) => (
                          <CardContent key={field.id}>
                            <IconButton onClick={() => remove(index)}>
                              <ClearIcon />
                            </IconButton>
                            <CardMedia component="img" height="500" image={props.photos[0]} alt="img" />
                          </CardContent>
                        ))}
                      </>
                    )}
                    <Button type="submit">Guardar</Button>
                  </FormControl>
                </form>
              </Box>
            </Modal>
            <IconButton onClick={handleOpen}>
              <DeleteIcon />
            </IconButton>
            <Modal open={open} onClose={handleClose}>
              <Box component="div" sx={style}>
                <Typography variant="h6" component="h2">
                  Deseas eliminar?
                </Typography>
                <Button onClick={handleDelete} variant="contained" sx={{ marginRight: 2, marginTop: 3 }}>
                  Si
                </Button>

                <Button onClick={handleOpen} variant="contained" sx={{ marginTop: 3 }}>
                  No
                </Button>
              </Box>
            </Modal>
          </>
        }
        title={'Tú'}
        subheader={props.createdAt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      {props.photos && props.photos.length > 0 && (
        <>
          <CardActions disableSpacing>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <CardMedia component="img" height="500" image={props.photos} alt="img" />
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};

export default Entries;
