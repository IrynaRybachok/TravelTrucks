import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async ({ page, limit, filters }, thunkAPI) => {
    try {
      const { data } = await axios.get("/campers", {
        params: {
          page,
          limit,
          ...filters,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "campers/getCamperById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getLocations = createAsyncThunk(
  "campers/getLocations",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/campers");
      return data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
