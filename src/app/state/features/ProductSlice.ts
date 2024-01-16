import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, Product, ApiResponse } from "@/app/utils/types";

const initialState: InitialState = {
  productResponse: {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  },
  numberOfLimit: 12,
  isLoading: true,
  error: "",
};

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (payload) => {
//     try {
//       const response = await fetch("/products", {
//         body: JSON.stringify(payload),
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return error;
//     }
//   },
// );

interface FetchProductsArgs {
  limit: number;
  skip: number;
}

export const fetchProducts = createAsyncThunk<
  // Return type of the payload creator
  any,
  // First argument to the payload creator
  FetchProductsArgs,
  // Types for ThunkAPI
  {
    rejectValue: any;
  }
>("products/fetchProducts", async ({ limit, skip }, { rejectWithValue }) => {
  // Destructure limit and skip from the payload argument
  try {
    // Construct the query parameters string
    const queryParams = new URLSearchParams({
      limit: limit.toString(),
      skip: skip.toString(),
    }).toString();

    // Make the fetch request with the query params
    const response = await fetch(`/products?${queryParams}`);

    // Check if the response is ok
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response data
    const data = await response.json();
    return data;
  } catch (error: any) {
    // Use rejectWithValue to return a custom error payload
    return rejectWithValue(error.message || "Something went wrong");
  }
});

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    handleLoadMore: (state, action) => {
      state.numberOfLimit = action.payload;
    },
    handleProductList: (state, action) => {
      state.productResponse.products = [
        ...state.productResponse.products,
        ...action.payload,
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<ApiResponse>) => {
        state.productResponse.products = action.payload.products;
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

export const { handleLoadMore, handleProductList } = productsSlice.actions;
export default productsSlice;
