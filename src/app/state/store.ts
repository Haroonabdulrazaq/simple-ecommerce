import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/ProductSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
