import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchParents = createAsyncThunk('assignParents/fetch', async (props, { rejectWithValue }) => {
  try {
    const { parents } = { parents: [] || ['some-parent-key-1', 'some-parent-key-2'] }; // some request to smart contract API
    return parents;
  } catch (error) {
    return rejectWithValue(JSON.stringify(error));
  }
});
