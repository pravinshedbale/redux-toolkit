import { createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Thunk Middleware

export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    // dispatch(setStatus(STATUS.IDLE));
    try {
      dispatch(setStatus(STATUS.LOADING));
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
      setStatus(STATUS.IDLE);
    } catch (error) {
      console.log(error);
      setStatus(STATUS.ERROR);
    }
  };
}
