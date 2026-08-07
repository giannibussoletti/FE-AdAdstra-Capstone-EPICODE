import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "../reducers/NavBarSlice"
import bookingSlice from "../reducers/TicketSlice"
export const store = configureStore({
  reducer: {
    menuState: menuSlice,
    bookingState: bookingSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
