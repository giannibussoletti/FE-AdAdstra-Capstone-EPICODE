import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { ProfileType } from "../../../fetchs/fetchTypes"

const initialState: ProfileType = {
  name: "",
  surname: "",
  email: "",
  birthDate: new Date(),
  profilePicLink: "",
  username: "",
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
    },
  },
})

export const { setUserState } = userSlice.actions
export default userSlice.reducer
