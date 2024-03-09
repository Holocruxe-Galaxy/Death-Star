// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit';

// ** Reducers
import user from 'src/store/apps/user';
import diary from 'src/store/diary';

export const store = configureStore({
  reducer: {
    user,
    diary,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
