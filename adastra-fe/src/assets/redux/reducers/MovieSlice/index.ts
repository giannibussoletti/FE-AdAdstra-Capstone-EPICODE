import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { DispatchMovie } from "../SlicesTypes"
const initialState = {
  movieTitle: "",
  timeStartAndEnd: "",
  duration: "",
}

export const movieSlice = createSlice({
  name: "movieState",
  initialState,
  reducers: {
    movieChoice: (state, action: PayloadAction<DispatchMovie>) => {
      state.movieTitle = action.payload.movieTitle
      state.duration = action.payload.duration
    },
    timeChoice: (state, action: PayloadAction<string>) => {
      state.timeStartAndEnd = action.payload
    },
  },
})

export const { movieChoice, timeChoice } = movieSlice.actions

export default movieSlice.reducer
