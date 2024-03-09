/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useState } from 'react';

interface DiaryContextProps {
  diaryPosts: DiaryPost[];
  getDiaryPosts: (postId: string) => Promise<void>;
  getDiaryPost: (postId: string) => Promise<void>;
  addDiaryPost: (post: DiaryPost) => Promise<void>;
  updateDiaryPost: (postId: string, data: DiaryPost) => Promise<void>;
  deleteDiaryPost: (postId: string) => Promise<void>;
}

interface DiaryPost {
  userId: string;
  content: string;
  date: string;
  state: string;
  attachFiles: string[];
  favorite: boolean;
}

interface DiaryProviderProps {
  children: React.ReactNode;
}
const DiaryContext = createContext<DiaryContextProps>({
  diaryPosts: [],
  getDiaryPosts: async () => {},
  getDiaryPost: async () => {},
  addDiaryPost: async () => {},
  updateDiaryPost: async () => {},
  deleteDiaryPost: async () => {},
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary/post/${postId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return await response.json();
  };

  // add diary post
  const addDiaryPost = async (post: DiaryPost) => {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_MANDALORE}/logbook/diary`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
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
    getDiaryPosts,
    getDiaryPost,
    addDiaryPost,
    updateDiaryPost,
    deleteDiaryPost,
  };

  return <DiaryContext.Provider value={data}>{children}</DiaryContext.Provider>;
};
