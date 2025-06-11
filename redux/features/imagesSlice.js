import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
/* import axios from 'axios'; */
import heroLocal from '../../assets/local-img-1.png';

/*
export const fetchImagesFromAPI = createAsyncThunk(
  'images/fetchImagesFromAPI',
  async () => {
    const res = await axios.get('https://api.example.com/images');
    return res.data;
  }
);
*/

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    localImages: {
      hero1: heroLocal,
      // başka local img'ler eklenebilir
    },
    apiImages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  /*extraReducers: (builder) => {
    builder
      .addCase(fetchImagesFromAPI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImagesFromAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.apiImages = action.payload;
      })
      .addCase(fetchImagesFromAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },*/
});

export default imagesSlice.reducer;
