import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { postAPI } from '../services/PostService';
import { userAPI } from '../services/UserService';

const rootReducer = combineReducers({
  [postAPI.reducerPath]: postAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaulrMiddleware) =>
      getDefaulrMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat([postAPI.middleware, userAPI.middleware]),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
