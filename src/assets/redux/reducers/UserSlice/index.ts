import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ProfileType } from "../../../fetchs/fetchTypes"

const initialState: ProfileType = {
  name: "",
  surname: "",
  email: "",
  birthDate: "",
  profilePicLink: "",
  username: "",
  accessToken: "",
}

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<ProfileType>) => {
      state.name = action.payload.name
      state.surname = action.payload.surname
      state.email = action.payload.email
      state.birthDate = action.payload.birthDate
      state.profilePicLink = action.payload.profilePicLink
      state.username = action.payload.username
      state.accessToken = action.payload.accessToken
    },
    resetUserState: (state) => {
      state.name = ""
      state.surname = ""
      state.email = ""
      state.birthDate = ""
      state.profilePicLink = ""
      state.username = ""
      state.accessToken = ""
    },
    setProPicLink: (state, action: PayloadAction<string>) => {
      state.profilePicLink = action.payload
    },
  },
})

export const { setUserState, resetUserState, setProPicLink } = userSlice.actions
export default userSlice.reducer
