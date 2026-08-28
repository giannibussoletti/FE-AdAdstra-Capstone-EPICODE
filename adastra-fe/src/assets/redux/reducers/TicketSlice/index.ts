import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Booking, DispatchSeat } from "../SlicesTypes"
import { GREEN, BLUE, RED, RESET } from "../../../misc/variables"

const initialState: Booking = {
  redSeatsPosition: [],
  greenSeatsPosition: [],
  blueSeatsPosition: [],
  isAdding: false,
  color: "",
  maxSeats: [],
  rowLetter: "",
  totalCost: 0,
}

export const bookingSlice = createSlice({
  name: "bookingState",
  initialState,
  reducers: {
    manageSeat: (state, action: PayloadAction<DispatchSeat>) => {
      state.color = action.payload.color
      state.isAdding = action.payload.isAdding

      if (state.maxSeats.length < 1) {
        state.rowLetter = action.payload.seat.row
      }

      if (state.color === GREEN) {
        switch (state.isAdding) {
          case true:
            state.greenSeatsPosition = [
              ...state.greenSeatsPosition,
              action.payload.seat,
            ]
            state.maxSeats = [...state.maxSeats, action.payload.seat]

            break
          case false:
            state.greenSeatsPosition = state.greenSeatsPosition.filter(
              (pos) => pos.id != action.payload.seat.id,
            )
            state.maxSeats = state.maxSeats.filter(
              (s) => s.id !== action.payload.seat.id,
            )

            break
        }
      } else if (state.color === RED) {
        switch (state.isAdding) {
          case true:
            state.redSeatsPosition = [
              ...state.redSeatsPosition,
              action.payload.seat,
            ]
            state.maxSeats = [...state.maxSeats, action.payload.seat]

            break
          case false:
            state.redSeatsPosition = state.redSeatsPosition.filter(
              (pos) => pos.id != action.payload.seat.id,
            )
            state.maxSeats = state.maxSeats.filter(
              (s) => s.id !== action.payload.seat.id,
            )
            break
        }
      } else if (state.color === BLUE) {
        switch (state.isAdding) {
          case true:
            state.blueSeatsPosition = [
              ...state.blueSeatsPosition,
              action.payload.seat,
            ]
            state.maxSeats = [...state.maxSeats, action.payload.seat]

            break
          case false:
            state.blueSeatsPosition = state.blueSeatsPosition.filter(
              (pos) => pos.id != action.payload.seat.id,
            )
            state.maxSeats = state.maxSeats.filter(
              (s) => s.id !== action.payload.seat.id,
            )

            break
        }
      }
    },
    updatePrice: (state, action: PayloadAction<number>) => {
      state.totalCost = action.payload
    },

    resetState: (state, action: PayloadAction<string>) => {
      state.color = action.payload
      if (state.color === RESET) {
        state.redSeatsPosition = []
        state.greenSeatsPosition = []
        state.blueSeatsPosition = []
        state.isAdding = false
        state.color = ""
        state.maxSeats = []
        state.rowLetter = ""
        state.totalCost = 0
      }
    },
  },
})

export const { manageSeat, updatePrice, resetState } = bookingSlice.actions

export default bookingSlice.reducer
