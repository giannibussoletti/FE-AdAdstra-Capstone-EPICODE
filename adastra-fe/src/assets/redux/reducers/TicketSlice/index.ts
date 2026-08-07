import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Booking } from "../SlicesTypes"

const initialState: Booking = {
  seats: [],
}

export const bookingSlice = createSlice({
  name: "bookingState",
  initialState,
  reducers: {
    addSeat: (state, action: PayloadAction<string>) => {
      state.seats = [...state.seats, action.payload]
    },
    removeSeat: (state, action: PayloadAction<string>) => {
      state.seats = state.seats.filter((seat) => seat !== action.payload)
    },
  },
})

export const { addSeat, removeSeat } = bookingSlice.actions

export default bookingSlice.reducer
