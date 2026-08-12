import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { DispatchMovie, MovieState, DispatchTime } from "../SlicesTypes"
const initialState: MovieState = {
  movieID: "",
  movieTitle: "",
  timeStartEnd: "",
  duration: "",
  screen: 0,
}

export const movieSlice = createSlice({
  name: "movieState",
  initialState,
  reducers: {
    movieChoice: (state, action: PayloadAction<DispatchMovie>) => {
      state.movieTitle = action.payload.movieTitle
      state.duration = action.payload.duration
      state.movieID = action.payload.movieID
    },
    timeAndScreen: (state, action: PayloadAction<DispatchTime>) => {
      state.timeStartEnd = action.payload.timeStartEnd
      state.screen = action.payload.screen
    },

    dateChoice: (state, action: PayloadAction<string>) => {
      state.date = action.payload
    },
  },
})

export const { movieChoice, timeAndScreen, dateChoice } = movieSlice.actions

export default movieSlice.reducer
