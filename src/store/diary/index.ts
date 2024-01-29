// ** Redux Imports
import { Dispatch } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Diary, { PostDiary } from 'src/pages/diary';
import axios from 'axios';

interface Redux {
  getState: any;
  dispatch: Dispatch<any>;
}

interface EntryState {
  data: Diary[];
  total: number;
  params: string[];
  allData: Diary[];
}

type PostDiaryAndFile = PostDiary & { file?: FormData };

type DiaryAndFile = Diary & { file?: FormData };

async function photoUploader(
  token: string,
  _id: string,
  counter = 0,
): Promise<any> {
  counter++;
  if (counter === 10) return;

  const responseWithFile = await fetch(
    `${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/entry/${_id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  const response: Diary = await responseWithFile.json();
  if (!response.photos?.length) return photoUploader(token, _id, counter);

  return response;
}

// ** Fetch Entries
export const fetchData = createAsyncThunk('appDiary/fetchData', async () => {
  const token = localStorage.getItem('accessToken');

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  const diaryData = await response.json();

  const dispatchableData = {
    allData: diaryData,
    diary: diaryData,
  };

  return dispatchableData;
});

// ** Add Entry
export const addDiary = createAsyncThunk(
  'appDiary/addDiary',
  async (data: PostDiary, { getState }: Redux) => {
    const token = localStorage.getItem('accessToken');

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const prevState: Diary[] = [...getState().diary.data];
    const res: Diary = await response.json();

    prevState.unshift(res);

    return { data: prevState };
  },
);

// ** Add Entry
export const addDiaryWithPhoto = createAsyncThunk(
  'appDiary/addDiaryWithPhoto',
  async (data: PostDiaryAndFile, { getState }: Redux) => {
    const token = localStorage.getItem('accessToken');
    const file = data.file;
    delete data.file;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const { _id } = await response.json();

    const fileResponse = await fetch(
      `${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/${_id}/upload`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: file,
      },
    );

    if (!fileResponse.ok) {
      const error = await response.json();

      throw new Error(error.message);
    }

    const prevState: Diary[] = [...getState().diary.data];
    if (!token) return { data: prevState };
    const uploaded = await photoUploader(token, _id);
    if (uploaded) {
      prevState.unshift(uploaded);

      return { data: prevState };
    }

    return { data: prevState };
  },
);

// ** Patch Entry
export const editEntrie = createAsyncThunk(
  'appDiary/editDiary',
  async ({ _id, ...changes }: Diary, { dispatch }: Redux) => {
    const token = localStorage.getItem('accessToken');

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/${_id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changes),
      },
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    dispatch(fetchData());
  },
);

// ** Patch Entry
export const editEntrieWithFile = createAsyncThunk(
  'appDiary/editDiaryWithFile',
  async ({ _id, ...changes }: DiaryAndFile, { dispatch }: Redux) => {
    const token = localStorage.getItem('accessToken');
    const file = changes.file;
    delete changes.file;

    await axios.patch(
      `${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/${_id}`,
      changes,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    await axios.post(
      `${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/${_id}/upload`,
      file,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (token) await photoUploader(token, _id);

    dispatch(fetchData());
  },
);

// ** Delete Entry
export const deleteDiary = createAsyncThunk(
  'appDiary/deleteDiary',
  async (id: number | string, { dispatch }: Redux) => {
    const token = localStorage.getItem('accessToken');

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    dispatch(fetchData());
  },
);

export const appDiarySlice = createSlice({
  name: 'appDiary',
  initialState: {
    data: [],
    total: 1,
    params: [],
    allData: [],
  } as EntryState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.diary;
      state.allData = action.payload.allData;
    });
    builder.addCase(addDiary.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(addDiaryWithPhoto.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export default appDiarySlice.reducer;
