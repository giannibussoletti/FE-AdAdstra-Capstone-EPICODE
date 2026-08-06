import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "../reducers/navBarSlice"
import filmDetailsSlice from "../reducers/filmDetailsSlice"
export const store = configureStore({
  reducer: {
    menuState: menuSlice,
    filmDetailsState: filmDetailsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
