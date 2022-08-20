import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchParents = createAsyncThunk('assignedParents/fetch', async (props, { rejectWithValue }) => {
  try {
    const { parents } = { parents: [] }; // some request to smart contract API
    return parents;
  } catch (error) {
    return rejectWithValue(JSON.stringify(error));
  }
});
