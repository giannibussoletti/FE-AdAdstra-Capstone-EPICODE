import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Booking, DispatchSeat } from "../SlicesTypes"
import { GREEN, BLUE, RED } from "../../../misc/variables"

const initialState: Booking = {
  seats: [],
  redSeats: 0,
  greenSeats: 0,
  blueSeats: 0,
  isAdding: false,
  color: "",
}

export const bookingSlice = createSlice({
  name: "bookingState",
  initialState,
  reducers: {
    manageSeat: (state, action: PayloadAction<DispatchSeat>) => {
      state.color = action.payload.color
      state.isAdding = action.payload.isAdding
      if (state.color === GREEN) {
        switch (state.isAdding) {
          case true:
            state.greenSeats += 1
            state.seats = [...state.seats, action.payload.seat]
            break
          case false:
            state.greenSeats -= 1
            state.seats = state.seats.filter(
              (pos) => pos !== action.payload.seat,
            )
            break
        }
      } else if (state.color === RED) {
        switch (state.isAdding) {
          case true:
            state.redSeats += 1
            state.seats = [...state.seats, action.payload.seat]
            break
          case false:
            state.redSeats -= 1
            state.seats = state.seats.filter(
              (pos) => pos !== action.payload.seat,
            )
            break
        }
      } else if (state.color === BLUE) {
        switch (state.isAdding) {
          case true:
            state.blueSeats += 1
            state.seats = [...state.seats, action.payload.seat]
            break
          case false:
            state.blueSeats -= 1
            state.seats = state.seats.filter(
              (pos) => pos !== action.payload.seat,
            )
            break
        }
      }
    },
  },
})

export const { manageSeat } = bookingSlice.actions

export default bookingSlice.reducer
