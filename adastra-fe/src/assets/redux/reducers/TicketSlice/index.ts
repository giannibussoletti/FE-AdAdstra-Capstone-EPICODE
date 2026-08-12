import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Booking, DispatchSeat } from "../SlicesTypes"
import { GREEN, BLUE, RED, RESET } from "../../../misc/variables"

const initialState: Booking = {
  redSeatsPosition: [],
  greenSeatsPosition: [],
  blueSeatsPosition: [],
  redSeatsAmount: 0,
  greenSeatsAmount: 0,
  blueSeatsAmount: 0,
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
        state.rowLetter = action.payload.seat.position.letter
      }

      if (state.color === GREEN) {
        switch (state.isAdding) {
          case true:
            state.greenSeatsAmount += 1
            state.greenSeatsPosition = [
              ...state.greenSeatsPosition,
              action.payload.seat.position,
            ]
            state.maxSeats = [...state.maxSeats, action.payload.seat]

            break
          case false:
            state.greenSeatsAmount -= 1
            state.greenSeatsPosition = state.greenSeatsPosition.filter(
              (pos) => pos.id != action.payload.seat.position.id,
            )
            state.maxSeats = state.maxSeats.filter(
              (s) => s.id !== action.payload.seat.id,
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
            state.maxSeats = [...state.maxSeats, action.payload.seat]

            break
          case false:
            state.redSeatsAmount -= 1
            state.redSeatsPosition = state.redSeatsPosition.filter(
              (pos) => pos.id != action.payload.seat.position.id,
            )
            state.maxSeats = state.maxSeats.filter(
              (s) => s.id !== action.payload.seat.id,
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
            state.maxSeats = [...state.maxSeats, action.payload.seat]

            break
          case false:
            state.blueSeatsAmount -= 1
            state.blueSeatsPosition = state.blueSeatsPosition.filter(
              (pos) => pos.id != action.payload.seat.position.id,
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
        state.redSeatsAmount = 0
        state.greenSeatsAmount = 0
        state.blueSeatsAmount = 0
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
