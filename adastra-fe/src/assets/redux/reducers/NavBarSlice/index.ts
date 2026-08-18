import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type {
  MenuState,
  PayloadStateMenu,
  PayloadStateCity,
} from "../SlicesTypes"

const initialState: MenuState = {
  isOpen: "start-100",
  citySearchMenu: "-",
  arrayMenu: [],
  isCities: false,
  arrayCity: [],
  cityId: "",
}

export const menuSlice = createSlice({
  name: "menuState",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<PayloadStateMenu>) => {
      state.isOpen = action.payload.isOpen
      state.arrayMenu = action.payload.arrayMenu
      state.isCities = action.payload.isCities
    },
    setCity: (state, action: PayloadAction<PayloadStateCity>) => {
      state.isOpen = action.payload.isOpen
      state.citySearchMenu = action.payload.citySearchMenu
      state.isCities = action.payload.isCities
      state.arrayCity = action.payload.arrayCity
    },
    setId: (state, action: PayloadAction<string>) => {
      state.cityId = action.payload
    },
  },
})

export const { setMenu, setCity, setId } = menuSlice.actions
export default menuSlice.reducer
