import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, Product } from "@/app/utils/types";

const initialState: InitialState = {
  productList: [],
  isLoading: true,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch("/products");
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.productList = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      fetchProducts.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    );
  },
});

export default productsSlice;
