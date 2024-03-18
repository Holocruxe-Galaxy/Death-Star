/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@mui/material';
import { VisuallyHiddenInput } from '../../styles/VisuallyHiddenInput';
import { useState } from 'react';
import { useDiaryContext } from '../../context/DiaryContext';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const AttachFileButton = () => {
  const [file, setFile] = useState<FormData>();
  const { changeDiaryPost, diaryPost } = useDiaryContext();

  const fileSelected = (e: any) => {
    const file = e.target?.files?.[0];
    const formData = new FormData();
    formData.append('photos', file as unknown as string);
    setFile(formData);

    changeDiaryPost({ ...diaryPost, attachFiles: [file] });
  };
  return (
    <Button
      component="label"
      endIcon={<AttachFileIcon />}
      sx={{
        color: 'white',
        backgroundColor: 'transparent',
        borderRadius: '50%',
        width: '2rem',
        height: '2rem',
        minWidth: 'auto',
        mr: 3.2,
        mt: 1,
      }}
    >
      <VisuallyHiddenInput type="file" accept="image/*" onChange={fileSelected} />
    </Button>
  );
};

export default AttachFileButton;
