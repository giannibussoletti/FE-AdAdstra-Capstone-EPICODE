import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { MobileMenu } from "../../misc/types"
interface MenuState {
  burgerMenu: string
  citySearchMenu: string
  userMenu: string
  arrayMenu: MobileMenu[]
}

interface PayloadStateMenu {
  burgerMenu: string
  arrayMenu: MobileMenu[]
}

const initialState: MenuState = {
  burgerMenu: "start-100",
  citySearchMenu: "start-100",
  userMenu: "start-100",
  arrayMenu: [],
}

export const menuSlice = createSlice({
  name: "menuState",
  initialState,
  reducers: {
    setBurger: (state, action: PayloadAction<PayloadStateMenu>) => {
      state.burgerMenu = action.payload.burgerMenu
      state.arrayMenu = action.payload.arrayMenu
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.citySearchMenu = action.payload
    },
    setUser: (state, action: PayloadAction<PayloadStateMenu>) => {
      state.burgerMenu = action.payload.burgerMenu
      state.arrayMenu = action.payload.arrayMenu
    },
  },
})

export const { setBurger, setCity, setUser } = menuSlice.actions
export default menuSlice.reducer
