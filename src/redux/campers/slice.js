import { getCampers } from "./operations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campers: [],
  totalCampers: 0,
  page: 1,
  isLoading: false,
  isError: null,
  filters: {},
  uniqueLocations: [],
};

const slice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload; // обновляем фильтр
    },
    setPage: (state, action) => {
      state.page = action.payload; // обновляем страницу
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        const newCampers = action.payload.items;
        state.totalCampers = action.payload.total;
        const existingCampers = newCampers.filter(
          (camper) =>
            !state.campers.some(
              (existingCamper) => existingCamper.id === camper.id
            )
        );

        state.campers = [...state.campers, ...existingCampers];
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { setFilters, setPage, resetPage } = slice.actions;

export const campersReducer = slice.reducer;
