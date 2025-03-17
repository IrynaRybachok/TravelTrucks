import { getCampers, getLocations, getCamperById } from "./operations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campers: [],
  totalCampers: 0,
  currentCamper: null,
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
    clearCampers: (state) => {
      state.campers = [];
      state.totalCampers = 0;
    },
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
      })
      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamper = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(getLocations.pending, (state) => {
        state.isError = null;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        const uniqueLocations = [
          ...new Set(action.payload.map((item) => item.location)),
        ];
        state.uniqueLocations = uniqueLocations;
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.isError = action.payload;
      });
  },
});

export const { clearCampers, setFilters, setPage, resetPage } = slice.actions;

export const campersReducer = slice.reducer;
