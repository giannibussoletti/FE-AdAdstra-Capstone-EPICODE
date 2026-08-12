import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "../reducers/NavBarSlice"
import bookingSlice from "../reducers/TicketSlice"
import movieSlice from "../reducers/MovieSlice"
export const store = configureStore({
  reducer: {
    menuState: menuSlice,
    bookingState: bookingSlice,
    movieState: movieSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
