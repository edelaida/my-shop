import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const shopApi = axios.create({
    baseURL: "https://67b30bddbc0165def8cfb08a.mockapi.io/api",
});
 
export const fetchCart = createAsyncThunk("fetchCart", async (_, thunkApi) => {
  try {
    const { data } = await shopApi.get("t1/products");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addToCart = createAsyncThunk(
  "addToCart",
  async (product, thunkApi) => {
    try {
      const { data } = await shopApi.post("t1/products", { ...product, count: 1 });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const removeFromCart = createAsyncThunk(
  "removeFromCart",
  async (product, thunkApi) => {
    try {
      const { data } = await shopApi.delete(`t1/products/${product.id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const increaseProductCount = createAsyncThunk(
  "increaseCount",
  async (product, thunkApi) => {
    try {
      await shopApi.put(`t1/products/${product.id}`, {
        ...product,
        count: product.count + 1,
      });
      thunkApi.dispatch(fetchCart());
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const decreaseProductCount = createAsyncThunk(
  "decreaseCount",
  async (product, thunkApi) => {
    try {
      await shopApi.put(`t1/products/${product.id}`, {
        ...product,
        count: product.count - 1,
      });
      thunkApi.dispatch(fetchCart());
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);