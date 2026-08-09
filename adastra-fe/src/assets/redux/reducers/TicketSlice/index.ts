import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Booking, DispatchSeat } from "../SlicesTypes"
import { GREEN, BLUE, RED } from "../../../misc/variables"

const initialState: Booking = {
  redSeatsPosition: [],
  greenSeatsPosition: [],
  blueSeatsPosition: [],
  redSeatsAmount: 0,
  greenSeatsAmount: 0,
  blueSeatsAmount: 0,
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
            state.greenSeatsAmount += 1
            state.greenSeatsPosition = [
              ...state.greenSeatsPosition,
              action.payload.seat.position,
            ]
            break
          case false:
            state.greenSeatsAmount -= 1
            state.greenSeatsPosition = state.greenSeatsPosition.filter(
              (pos) => pos !== action.payload.seat.position,
            )
            break
        }
      } else if (state.color === RED) {
        switch (state.isAdding) {
          case true:
            state.redSeatsAmount += 1
            state.redSeatsPosition = [
              ...state.redSeatsPosition,
              action.payload.seat.position,
            ]
            break
          case false:
            state.redSeatsAmount -= 1
            state.redSeatsPosition = state.redSeatsPosition.filter(
              (pos) => pos !== action.payload.seat.position,
            )
            break
        }
      } else if (state.color === BLUE) {
        switch (state.isAdding) {
          case true:
            state.blueSeatsAmount += 1
            state.blueSeatsPosition = [
              ...state.blueSeatsPosition,
              action.payload.seat.position,
            ]
            break
          case false:
            state.blueSeatsAmount -= 1
            state.blueSeatsPosition = state.blueSeatsPosition.filter(
              (pos) => pos !== action.payload.seat.position,
            )
            break
        }
      }
    },
  },
})

export const { manageSeat } = bookingSlice.actions

export default bookingSlice.reducer
