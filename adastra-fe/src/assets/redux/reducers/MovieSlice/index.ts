import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { MovieGroup } from "../../../fetchs/fetchTypes"
import type {
  DispatchMovie,
  MovieState,
  DispatchTime,
  DispatchDate,
} from "../SlicesTypes"
const initialState: MovieState = {
  movieID: "",
  movieTitle: "",
  timeStartEnd: "",
  duration: 0,
  screen: 0,
  screenId: "",
  date: "",
  movies: [],
  screeningTimeId: "",
}

export const movieSlice = createSlice({
  name: "movieState",
  initialState,
  reducers: {
    movieChoice: (state, action: PayloadAction<DispatchMovie>) => {
      state.movieTitle = action.payload.movieTitle
      state.duration = action.payload.duration
      state.movieID = action.payload.movieID
      state.screeningTimeId = action.payload.screeningTimeId
    },
    timeAndScreen: (state, action: PayloadAction<DispatchTime>) => {
      state.timeStartEnd = action.payload.timeStart
      state.screen = action.payload.screen
      state.screenId = action.payload.screenId
    },

    dateChoice: (state, action: PayloadAction<DispatchDate>) => {
      state.date = action.payload.date
    },
    moviesArray: (state, action: PayloadAction<MovieGroup[]>) => {
      state.movies = action.payload
    },
  },
})

export const { movieChoice, timeAndScreen, dateChoice, moviesArray } =
  movieSlice.actions

export default movieSlice.reducer
