import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
// import userReducer from './reducers/UserSlice';
import { postAPI } from '../services/PostService';
import { userAPI } from '../services/UserService';

const rootReducer = combineReducers({
  // userReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
});

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

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
