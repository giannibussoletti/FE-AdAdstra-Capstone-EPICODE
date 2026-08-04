import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "../reducers/mobileMenuSlice"
export const store = configureStore({
  reducer: {
    menuState: menuSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
