import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface MenuState {
  burgerMenu: string
  citySearchMenu: string
  userMenu: string
}

const initialState: MenuState = {
  burgerMenu: "start-100",
  citySearchMenu: "start-100",
  userMenu: "start-100",
}

export const menuSlice = createSlice({
  name: "menuState",
  initialState,
  reducers: {
    setBurger: (state, action: PayloadAction<string>) => {
      state.burgerMenu = action.payload
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.citySearchMenu = action.payload
    },
    setUser: (state, action: PayloadAction<string>) => {
      state.userMenu = action.payload
    },
  },
})

export const { setBurger, setCity, setUser } = menuSlice.actions
export default menuSlice.reducer
