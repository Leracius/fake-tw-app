import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    currentUser: "",
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchCommentsSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchCommentsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  startLoading,
  fetchCommentsSuccess,
  fetchCommentsError,
} = commentsSlice.actions;
export default commentsSlice.reducer;