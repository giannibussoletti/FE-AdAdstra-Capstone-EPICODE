import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Booking } from "../SlicesTypes"

const initialState: Booking = {
  seats: [],
  redSeats: 0,
  greenSeats: 0,
  blueSeats: 0,
}

type dispatchSeat = {
  seats: string
  redSeats?: number
  greenSeats?: number
  blueSeats?: number
}

export const bookingSlice = createSlice({
  name: "bookingState",
  initialState,
  reducers: {
    addRedSeat: (state, action: PayloadAction<dispatchSeat>) => {
      if (action.payload.redSeats)
        state.redSeats = state.redSeats += action.payload.redSeats
      state.seats = [...state.seats, action.payload.seats]
    },
    addGreenSeat: (state, action: PayloadAction<dispatchSeat>) => {
      if (action.payload.greenSeats)
        state.redSeats = state.redSeats += action.payload.greenSeats
      state.seats = [...state.seats, action.payload.seats]
    },
    addBlueSeat: (state, action: PayloadAction<dispatchSeat>) => {
      if (action.payload.blueSeats)
        state.redSeats = state.redSeats += action.payload.blueSeats
      state.seats = [...state.seats, action.payload.seats]
    },
    removeRedSeat: (state, action: PayloadAction<dispatchSeat>) => {
      if (action.payload.redSeats)
        state.redSeats = state.redSeats -= action.payload.redSeats
      state.seats = state.seats.filter((seat) => seat !== action.payload.seats)
    },
    removeGreenSeat: (state, action: PayloadAction<dispatchSeat>) => {
      if (action.payload.greenSeats)
        state.greenSeats = state.greenSeats -= action.payload.greenSeats
      state.seats = state.seats.filter((seat) => seat !== action.payload.seats)
    },
    removeBlueSeat: (state, action: PayloadAction<dispatchSeat>) => {
      if (action.payload.blueSeats)
        state.blueSeats = state.blueSeats -= action.payload.blueSeats
      state.seats = state.seats.filter((seat) => seat !== action.payload.seats)
    },
  },
})

export const {
  addSeat,
  removeSeat,
  addRedSeat,
  addGreenSeat,
  addBlueSeat,
  removeRedSeat,
  removeGreenSeat,
  removeBlueSeat,
} = bookingSlice.actions

export default bookingSlice.reducer
