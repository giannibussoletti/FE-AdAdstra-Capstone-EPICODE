export type CinemaFetchType = {
  cinemaName: string
  address: string
  id: string
  isDeleted: string
}

export type MovieInfo = {
  starring: string
  duration: number
  title: string
  posterLink: string
  plot: string
  id: string
  isDeleted: string
}

export type ScreenInfo = {
  screenNumber: number
  id: string
  isDeleted: string
}

export type DateTimeFectch = {
  dateTime: string
  movieId: MovieInfo
  screenId: ScreenInfo
  id: string
  isDeleted: string
}
