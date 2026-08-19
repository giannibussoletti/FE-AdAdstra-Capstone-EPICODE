import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type {
  MenuState,
  PayloadStateMenu,
  PayloadStateCinema,
} from "../SlicesTypes"

const initialState: MenuState = {
  isOpen: "start-100",
  cinemaSearchMenu: "-",
  arrayMenu: [],
  isCinema: false,
  arrayCinema: [],
  cinemaId: "",
}

export const menuSlice = createSlice({
  name: "menuState",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<PayloadStateMenu>) => {
      state.isOpen = action.payload.isOpen
      state.arrayMenu = action.payload.arrayMenu
      state.isCinema = action.payload.isCinema
    },
    setCinemaState: (state, action: PayloadAction<PayloadStateCinema>) => {
      state.isOpen = action.payload.isOpen
      state.cinemaSearchMenu = action.payload.cinemaSearchMenu
      state.isCinema = action.payload.isCinema
      state.arrayCinema = action.payload.arrayCinema
    },
    setId: (state, action: PayloadAction<string>) => {
      state.cinemaId = action.payload
    },
  },
})

export const { setMenu, setCinemaState, setId } = menuSlice.actions
export default menuSlice.reducer
