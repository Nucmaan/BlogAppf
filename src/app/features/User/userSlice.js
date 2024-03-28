// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: state => {
      state.loading = true;
    },
    fullInfo: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const { fullInfo, setLoading, setError, logout } = userSlice.actions;

export default userSlice.reducer;
