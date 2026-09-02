import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { MovieDetails, MovieGroup } from "../../../fetchs/fetchTypes"
import type { DispatchMovie, MovieState, DispatchDate } from "../SlicesTypes"
const initialState: MovieState = {
  movieID: "",
  movieTitle: "",
  duration: 0,
  screen: 0,
  screenId: "",
  date: "",
  cinemaMovies: [],
  allMovies: [],
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
      state.screen = action.payload.screen
      state.screenId = action.payload.screenId
      state.date = action.payload.date
    },

    dateChoice: (state, action: PayloadAction<DispatchDate>) => {
      state.date = action.payload.date
    },
    cinemaMoviesArray: (state, action: PayloadAction<MovieGroup[]>) => {
      state.cinemaMovies = action.payload
    },
    AllMoviesArray: (state, action: PayloadAction<MovieDetails[]>) => {
      state.allMovies = action.payload
    },
  },
})

export const { movieChoice, dateChoice, cinemaMoviesArray, AllMoviesArray } =
  movieSlice.actions

export default movieSlice.reducer
