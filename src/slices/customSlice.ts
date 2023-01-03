import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GifResponse } from '../api';

type CustomStateType = {
  count: number;
  isModalOpen: boolean;
  selectedGif?: GifResponse['id'];
  gifList: GifResponse[];
};

const initialState: CustomStateType = {
  count: 0,
  isModalOpen: false,
  gifList: [],
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

    setItems: (state, payload: PayloadAction<GifResponse[]>) => {
      state.gifList = payload.payload;
    },

    setSelectedGif: (state, payload: PayloadAction<string>) => {
      state.selectedGif = payload.payload;
    },
  },
});

export const { increaseCount, toggleModal, setSelectedGif, setItems } =
  customSlice.actions;

export default customSlice.reducer;
