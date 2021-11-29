import { configureStore } from "@reduxjs/toolkit";
import { categorySlice, ModelSlice, pathNameSlice } from "./slices";
const store = configureStore({
  reducer: {
      category: categorySlice.reducer,
      model: ModelSlice.reducer,
      pathName: pathNameSlice.reducer
  },
});

export default store;