import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store';

// ** MUI Imports
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  IconButton,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  Stack,
  Tooltip,
  Switch,
  InputAdornment,
} from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

// ** Emoji Picker
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

// ** Components
import Entries from 'src/@core/components/diary/Entries';

// ** Redux
import { addDiary, addDiaryWithPhoto, fetchData } from 'src/store/diary';

// ** Utils
import emotions from 'src/@core/utils/emotions';

// ** Icon Components
import UploadButton from 'src/@core/components/icon/diary/UploadButton';

//import ArtIcon from 'src/@core/icons/diary/ArtIcon'
import IconEmojiButton from 'src/@core/components/icon/diary/IconEmojiButton';
import Send from 'src/@core/components/icon/diary/Send';

const useStyles = makeStyles(() => ({
  picker: {
    position: 'absolute',
    top: 92,
    right: 20,
    zIndex: 9999,
  },
  iconButton: {
    '&:hover': {
      backgroundColor: 'transparent', // Set the background color to transparent on hover
    },
    '&:active': {
      backgroundColor: 'transparent', // Set the background color to transparent when active (clicked)
    },
    '& .MuiIconButton-label': {
      transition: 'none', // Remove any transitions on the label (icon) to prevent animations
    },
  },
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

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  width: 1,
  height: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

interface Diary {
  _id: string;
  content: string;
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
  emoji?: string;
  photos?: string[];
}

export type PostDiary = Omit<
  Diary,
  '_id' | 'createdAt' | 'updatedAt' | 'photos'
>;

const Diary = () => {
  const { data: diaryData } = useSelector((state: RootState) => state.diary);
  const dispatch = useDispatch<AppDispatch>();

  const [toSend, setToSend] = useState<boolean>(false);
  const [isPickerVisible, setPickerVisible] = useState<boolean | null>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [isMultiline, setMultiline] = useState<boolean>(false);
  const [file, setFile] = useState<FormData>();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const [diary, setDiary] = useState<PostDiary>({
    content: '',
    favorite: false,
  });

  useEffect(() => {
    dispatch(fetchData());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (diary.content.length && !file) {
      dispatch(addDiary(diary));
      setDiary({ content: '', favorite: false });
    } else if (diary.content.length && file) {
      dispatch(addDiaryWithPhoto({ ...diary, file }));
      setDiary({ content: '', favorite: false });
      setFile(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toSend]);

  const handleChange = (e: SelectChangeEvent<string>) => {
    setDiary({ ...diary, emoji: e.target.value });
  };

  const handleValue = (e: any) => {
    if (inputRef?.current) {
      inputRef.current.value = e.target.value;
      inputRef.current.value.length ? setMultiline(true) : setMultiline(false);
    }
  };

  const handleSwitchChange = () => {
    setDiary({ ...diary, favorite: !diary.favorite });
  };

  const handleEmojiSelect = (emoji: any) => {
    if (inputRef.current && isPickerVisible) {
      const cursorPosition = inputRef.current.selectionStart || 0;
      const inputValue = inputRef.current.value;
      const beforeCursor = inputValue.substring(0, cursorPosition);
      const afterCursor = inputValue.substring(cursorPosition);

      const newValue = beforeCursor + emoji.native + afterCursor;
      inputRef.current.value = newValue;
    }

    setPickerVisible(!isPickerVisible);
  };

  const handleChecked = () => {
    setChecked(!checked);
  };

  const fileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    const formData = new FormData();
    formData.append('photos', file as unknown as string);
    setFile(formData);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.length) {
      setDiary({ ...diary, content: inputRef.current.value });
      setToSend(!toSend);
      inputRef.current.value = '';
    }
  };

  const classes = useStyles();

  return (
    <Card sx={{ height: '100%', mb: 5 }}>
      <CardContent>
        <Box
          sx={
            isMultiline
              ? {
                  backgroundColor: '#0e2b42',
                  height: '9.4rem',
                  p: 3,
                  borderRadius: 1,
                }
              : {
                  backgroundColor: '#0e2b42',
                  height: '5rem',
                  p: 3,
                  borderRadius: 1,
                }
          }
          component="div"
        >
          <form
            onSubmit={onSubmit}
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <TextField
              focused={isMultiline ? true : false}
              variant="outlined"
              size="medium"
              multiline={true}
              minRows={isMultiline ? 4 : 0}
              id="myInput"
              label="Qué hay de nuevo? ..."
              inputRef={inputRef}
              onChange={(e) => handleValue(e)}
              sx={{
                width: '80%',
                mr: 3,
                borderRadius: 2,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ display: 'flex' }}>
                    {!isPickerVisible ? (
                      ''
                    ) : (
                      <Card className={classes.picker} ref={pickerRef}>
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
                    <IconButton
                      onClick={() => setPickerVisible(!isPickerVisible)}
                      sx={isMultiline ? undefined : { display: 'none' }}
                      className={classes.iconButton}
                    >
                      <IconEmojiButton />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
            <div>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 2,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Tooltip
                  title="Al activarlo, se guardará como tus publicaciones favoritas"
                  placement="top"
                >
                  <MaterialUISwitch
                    sx={{ marginRight: 3 }}
                    onChange={handleSwitchChange}
                    onClick={handleChecked}
                    checked={checked}
                  />
                </Tooltip>

                <Button
                  component="label"
                  endIcon={<UploadButton />}
                  sx={{
                    backgroundColor: 'transparent',
                    borderRadius: '50%',
                    width: '2rem',
                    height: '2rem',
                    minWidth: 'auto',
                    mr: 3.2,
                    mt: 1,
                  }}
                  className={classes.iconButton}
                >
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={fileSelected}
                  />
                </Button>

                <Select
                  id="select"
                  value={diary.emoji || ''}
                  sx={{ height: '2.5rem', pt: 2 }}
                  onChange={handleChange}
                  displayEmpty
                  renderValue={(selected) => {
                    if (selected === '' || !selected) {
                      return <EmojiEmotionsIcon sx={{ pl: 10 }} />;
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
              </Box>
              <Button
                variant="contained"
                type="submit"
                sx={
                  isMultiline
                    ? {
                        height: '3.2rem',
                        width: '8.8rem',
                        mt: 6,
                        ml: 27,
                        position: 'relative',
                        zIndex: 0,
                        fontSize: 17,
                      }
                    : { display: 'none' }
                }
              >
                Publicar
                <div style={{ paddingLeft: 6, paddingTop: 14 }}>
                  <Send />
                </div>
              </Button>
            </div>
          </form>
        </Box>
      </CardContent>
      <CardContent>
        {diaryData.length ? (
          diaryData.map((entrie) => (
            <Stack
              spacing={2}
              key={entrie._id}
              direction="column"
              marginTop={3}
            >
              <Entries id={entrie._id} props={entrie} />
            </Stack>
          ))
        ) : (
          <Container sx={{ textAlign: 'center', mt: 62 }} fixed>
            <SentimentVeryDissatisfiedIcon sx={{ color: '#91A7B8' }} />
            <Typography variant="h5" sx={{ color: '#91A7B8' }}>
              No hay entradas publicadas
            </Typography>
          </Container>
        )}
      </CardContent>
    </Card>
  );
};

export default Diary;
