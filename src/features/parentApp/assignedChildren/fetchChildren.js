import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchChildren = createAsyncThunk('assignedChildren/fetch', async (props, { rejectWithValue }) => {
  try {
    const { children } = {
      children: [
        {
          key: 'some-child-key-1',
          coords: {
            latitude: 41.7149921 + Math.random() / 20,
            longitude: 44.762258 + Math.random() / 20,
          },
        },
      ],
    }; // some request to smart contract API
    return children;
  } catch (error) {
    return rejectWithValue(JSON.stringify(error));
  }
});
