import { User, UserState } from '../../interfaces/user.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../action-creators/users';


const initialState: UserState = {
  data: [],
  error: null,
  isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
})

export default userSlice.reducer;

