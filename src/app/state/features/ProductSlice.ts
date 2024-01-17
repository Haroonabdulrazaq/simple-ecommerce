import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialState,
  FetchProductsArgs,
  ApiResponse,
} from "@/app/utils/types";

const initialState: InitialState = {
  productResponse: {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  },
  singleProduct: {
    brand: "",
    category: "",
    description: "",
    discountPercentage: 0,
    id: 0,
    images: [],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: "",
    title: "",
  },
  bestSellerProducts: {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  },
  isLoading: true,
  isLoadingSingleProduct: true,
  wishList: [],
  cartItemList: [],
  error: "",
};

export const fetchProducts = createAsyncThunk<
  any,
  FetchProductsArgs,
  {
    rejectValue: any;
  }
>("products/fetchProducts", async ({ limit, skip }, { rejectWithValue }) => {
  try {
    const queryParams = new URLSearchParams({
      limit: limit.toString(),
      skip: skip.toString(),
    }).toString();

    const response = await fetch(`/api/products?${queryParams}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (payload: string) => {
    try {
      const response = await fetch(`/api/products/${payload}`);
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
  reducers: {
    handleProductList: (state, action) => {
      state.productResponse.products = [
        ...state.productResponse.products,
        ...action.payload,
      ];
    },
    handleSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    addToWishList: (state, action) => {
      if (state.wishList.some((item) => item.id === action.payload.id)) {
        return;
      }
      state.wishList = [...state.wishList, action.payload];
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== Number(action.payload),
      );
    },
    addToCart: (state, action) => {
      if (state.wishList.some((item) => item.id === action.payload.id)) {
        return;
      }

      state.cartItemList = [...state.cartItemList, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cartItemList = state.cartItemList.filter(
        (item) => item.id !== Number(action.payload),
      );
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
        state.bestSellerProducts = action.payload;
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
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.isLoadingSingleProduct = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.isLoadingSingleProduct = false;
      state.singleProduct = action.payload;
    });
    builder.addCase(
      fetchSingleProduct.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoadingSingleProduct = true;
        state.error = action.payload.message;
      },
    );
  },
});

export const {
  handleProductList,
  handleSingleProduct,
  addToWishList,
  addToCart,
  removeFromWishList,
  removeFromCart,
} = productsSlice.actions;
export default productsSlice;
