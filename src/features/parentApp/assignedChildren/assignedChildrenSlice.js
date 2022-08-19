import { createSlice } from '@reduxjs/toolkit';
import { fetchChildren } from './fetchChildren';

const defaultMethodState = {
  pending: false,
  error: null,
};

const initialState = {
  children: [],
  initiallyFetched: false,
  fetchChildren: defaultMethodState,
};

export const childrenSlice = createSlice({
  name: 'assignedChildren',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChildren.pending, (state, _action) => {
      state.fetchChildren.pending = true;
    });
    builder.addCase(fetchChildren.fulfilled, (state, { payload }) => {
      state.fetchChildren.pending = false;
      state.fetchChildren.error = null;
      state.children = payload;
      state.initiallyFetched = true;
    });
    builder.addCase(fetchChildren.rejected, (state, { payload }) => {
      state.fetchChildren.pending = false;
      state.fetchChildren.error = payload;
      state.initiallyFetched = true;
    });
  },
});

export default childrenSlice.reducer;
