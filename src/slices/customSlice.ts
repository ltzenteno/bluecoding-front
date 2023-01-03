import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CustomStateType = {
  count: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
};

const initialState: CustomStateType = {
  count: 0,
  status: 'idle',
};

const customSlice = createSlice({
  name: 'custom',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    increaseCount: (state, _payload: PayloadAction<void>) => {
      state.count++;
    },
  },
});

export const { increaseCount } = customSlice.actions;

export default customSlice.reducer;
