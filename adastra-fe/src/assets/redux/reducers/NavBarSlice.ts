import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { MobileMenu } from "../../misc/types"
interface MenuState {
  isOpen: string
  citySearchMenu: string
  arrayMenu: MobileMenu[]
}

interface PayloadStateMenu {
  isOpen: string
  arrayMenu: MobileMenu[]
}

const initialState: MenuState = {
  isOpen: "start-100",
  citySearchMenu: "start-100",

  arrayMenu: [],
}

export const menuSlice = createSlice({
  name: "menuState",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<PayloadStateMenu>) => {
      state.isOpen = action.payload.isOpen
      state.arrayMenu = action.payload.arrayMenu
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.citySearchMenu = action.payload
    },
  },
})

export const { setMenu, setCity } = menuSlice.actions
export default menuSlice.reducer
