import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type {
  DispatchMovie,
  MovieState,
  DispatchTime,
  DispatchDate,
} from "../SlicesTypes"
const initialState: MovieState = {
  movieID: 0,
  movieTitle: "",
  timeStartEnd: "",
  duration: "",
  screen: 0,
  date: "",
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

    dateChoice: (state, action: PayloadAction<DispatchDate>) => {
      state.date = action.payload.date
    },
  },
})

export const { movieChoice, timeAndScreen, dateChoice } = movieSlice.actions

export default movieSlice.reducer
