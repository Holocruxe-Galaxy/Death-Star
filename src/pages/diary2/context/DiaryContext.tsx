/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from 'react';
import { DiaryPost } from '../interfaces/diary-post.interface';

interface DiaryContextProps {
  diaryPosts: DiaryPost[];
  diaryPost: DiaryPost;
  getDiaryPosts: (postId: string) => Promise<void>;
  getDiaryPost: (postId: string) => Promise<void>;
  addDiaryPost: (post: DiaryPost) => Promise<void>;
  updateDiaryPost: (postId: string, data: DiaryPost) => Promise<void>;
  deleteDiaryPost: (postId: string) => Promise<void>;
  changeDiaryPost: (post: DiaryPost) => void;
}

export interface DiaryProviderProps {
  children: React.ReactNode;
}

const DiaryContext = createContext<DiaryContextProps>({
  diaryPosts: [],
  diaryPost: {} as DiaryPost,
  getDiaryPosts: async () => {},
  getDiaryPost: async () => {},
  addDiaryPost: async () => {},
  updateDiaryPost: async () => {},
  deleteDiaryPost: async () => {},
  changeDiaryPost: () => {},
});

export const useDiaryContext = () => {
  const context = useContext(DiaryContext);
  if (!context) {
    throw new Error('useDiaryContext must be used within a DiaryProvider');
  }
  return context;
};

export const DiaryProvider = ({ children }: DiaryProviderProps) => {
  const [diaryPosts, setDiaryPosts] = useState<DiaryPost[]>([]);
  const [diaryPost, setDiaryPost] = useState<DiaryPost>({
    userId: '',
    content: '',
    date: '',
    state: '',
    attachFiles: [],
    favorite: false,
  });

  const changeDiaryPost = (post: DiaryPost) => {
    setDiaryPost(post);
  };

  // get diary posts
  const getDiaryPosts = async (userId: string) => {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const res: DiaryPost[] = await response.json();
    setDiaryPosts(res);
  };

  // get diary post
  const getDiaryPost = async (postId: string) => {
    const token = localStorage.getItem('accessToken');

    console.log('POST');
    const response = await fetch(`${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/post/${postId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const post = await response.json();

    return post;
  };

  // add diary post
  const addDiaryPost = async (post: DiaryPost) => {
    // console.log(post);
    // const token = localStorage.getItem('accessToken');
    // const response = await fetch(`${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(post),
    // });

    // if (!response.ok) {
    //   const error = await response.json();
    //   throw new Error(error.message);
    // }

    setDiaryPosts([...diaryPosts, post]);
  };

  // update diary post
  const updateDiaryPost = async (postId: string, data: DiaryPost) => {
    const token = localStorage.getItem('accessToken');

    const response = await fetch(`${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/${postId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return await response.json();
  };

  // delete diary post
  const deleteDiaryPost = async (postId: string) => {
    const token = localStorage.getItem('accessToken');

    const response = await fetch(`${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return await response.json();
  };

  const data = {
    diaryPosts,
    diaryPost,
    getDiaryPosts,
    getDiaryPost,
    addDiaryPost,
    updateDiaryPost,
    deleteDiaryPost,
    changeDiaryPost,
  };

  return <DiaryContext.Provider value={data}>{children}</DiaryContext.Provider>;
};
