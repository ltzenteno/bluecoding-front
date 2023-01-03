import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CustomStateType = {
  count: number;
  isModalOpen: boolean;
};

const initialState: CustomStateType = {
  count: 0,
  isModalOpen: false,
};

const customSlice = createSlice({
  name: 'custom',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    increaseCount: (state, _payload: PayloadAction<void>) => {
      state.count++;
    },

    toggleModal: (state, payload: PayloadAction<boolean>) => {
      state.isModalOpen = payload.payload;
    },
  },
});

export const { increaseCount, toggleModal } = customSlice.actions;

export default customSlice.reducer;
