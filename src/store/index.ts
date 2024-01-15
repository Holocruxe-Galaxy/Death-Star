// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit';

// ** Reducers
import chat from 'src/store/apps/chat';
import user from 'src/store/apps/user';

export const store = configureStore({
  reducer: {
    user,
    chat,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
