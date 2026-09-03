import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ProfileInitialState, ProfileType, UserMovies } from "../../../fetchs/fetchTypes"

const initialState: ProfileInitialState = {
  name: "",
  surname: "",
  email: "",
  birthDate: "",
  profilePicLink: "",
  username: "",
  accessToken: "",
  userMovies: [],
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
    setUserMovies: (state, action: PayloadAction<UserMovies[]>) => {
      state.userMovies = action.payload
    },
  },
})

export const { setUserState, resetUserState, setProPicLink, setUserMovies } = userSlice.actions
export default userSlice.reducer
