import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface PostDiary {
  id: string;
  content: string;
  date: string;
  state?: string;
  attachFile?: string;
}

interface Diary2State {
  userId: string;
  posts: PostDiary[];
}

const initialState: Diary2State = {
  userId: '',
  posts: [],
};

const diarySlice = createSlice({
  name: 'diary2',
  initialState,
  reducers: {
    setDiary(state, action: PayloadAction<Diary2State>) {
      state.userId = action.payload.userId;
      state.posts = action.payload.posts;
      return state;
    },
    getDiary(state) {
      return state;
    },
    postDiary(state, action: PayloadAction<PostDiary>) {
      state.posts.push(action.payload);
      return state;
    },
  },
});

export const { postDiary } = diarySlice.actions;

export default diarySlice.reducer;

// Thunks

// Fetch diary posts
export const fetchPosts = (userId: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get('');
      dispatch(postDiary(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

// Add post to diary
export const addPost = (post: PostDiary) => {
  return async (dispatch: any) => {
    dispatch(postDiary(post));
    try {
      const response = await axios.post('');
    } catch (error) {
      console.log(error);
    }
  };
};

// Update post in diary
export const updatePost = (post: PostDiary) => {
  return async (dispatch: any) => {
    dispatch(postDiary(post));
    try {
      const response = await axios.put('');
    } catch (error) {
      console.log(error);
    }
  };
};

// Delete post from diary

export const deletePost = (postId: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.delete('');
    } catch (error) {
      console.log(error);
    }
  };
};
