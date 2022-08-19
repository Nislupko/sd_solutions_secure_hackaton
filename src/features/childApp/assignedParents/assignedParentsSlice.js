import { createSlice } from '@reduxjs/toolkit';
import { fetchParents } from './fetchParents';

const defaultMethodState = {
  pending: false,
  error: null,
};

const initialState = {
  parents: [],
  initiallyFetched: false,
  fetchParents: defaultMethodState,
};

export const parentsSlice = createSlice({
  name: 'assignedParents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchParents.pending, (state, _action) => {
      state.fetchParents.pending = true;
    });
    builder.addCase(fetchParents.fulfilled, (state, { payload }) => {
      state.fetchParents.pending = false;
      state.fetchParents.error = null;
      state.parents = payload;
      state.initiallyFetched = true;
    });
    builder.addCase(fetchParents.rejected, (state, { payload }) => {
      state.fetchParents.pending = false;
      state.fetchParents.error = payload;
      state.initiallyFetched = true;
    });
  },
});

export default parentsSlice.reducer;
