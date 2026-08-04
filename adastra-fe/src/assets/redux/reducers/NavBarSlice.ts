import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { MobileMenu } from "../../misc/types"
type MenuState = {
  isOpen: string
  citySearchMenu: string
  arrayMenu: MobileMenu[]
  isCities: boolean
  arrayCity: string[]
}

type PayloadStateMenu = {
  isOpen: string
  arrayMenu: MobileMenu[]
  isCities: boolean
}

type PayloadStateCity = {
  isOpen: string
  citySearchMenu: string
  isCities: boolean
  arrayCity: string[]
}

const initialState: MenuState = {
  isOpen: "start-100",
  citySearchMenu: "-",
  arrayMenu: [],
  isCities: false,
  arrayCity: [],
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
  },
})

export const { setMenu, setCity } = menuSlice.actions
export default menuSlice.reducer
