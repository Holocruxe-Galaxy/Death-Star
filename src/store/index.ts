// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit';

// ** Reducers
import chat from 'src/store/apps/chat';
import diary from 'src/store/diary';
import user from 'src/store/apps/user';
import diary2 from 'src/store/diary2';

export const store = configureStore({
  reducer: {
    user,
    diary,
    diary2,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
