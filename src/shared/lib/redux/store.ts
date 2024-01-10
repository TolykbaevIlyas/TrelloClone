import { taskApi } from '@/shared/api/TrelloApi';
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore ({
  reducer:{   
    [taskApi.reducerPath] : taskApi.reducer,
  },
  middleware:(getDefaultMiddleware) => 
  getDefaultMiddleware().concat(taskApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState> ;
export type AppDispatch = typeof store.dispatch;