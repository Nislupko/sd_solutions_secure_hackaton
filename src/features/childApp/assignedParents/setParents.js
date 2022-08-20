import { createAsyncThunk } from '@reduxjs/toolkit';

export const setParents = createAsyncThunk('assignedParents/set', async (parentId, { rejectWithValue }) => {
  try {
    // set parent somehow here
    return [parentId];
  } catch (error) {
    return rejectWithValue(JSON.stringify(error));
  }
});
