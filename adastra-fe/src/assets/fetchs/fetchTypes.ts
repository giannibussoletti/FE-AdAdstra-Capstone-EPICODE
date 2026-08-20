export type CinemaFetchType = {
  cinemaName: string
  address: string
  id: string
  isDeleted: string
}

export type MovieDetails = {
  starring: string
  duration: number
  title: string
  posterLink: string
  plot: string
  id: string
  isDeleted: string
}

export type ScreeningTime = {
  dateTime: string
  screenNumber: number
  screenId: string
}

export type Times = {
  [date: string]: ScreeningTime[]
}

export type MovieGroup = {
  movieDetails: MovieDetails
  times: Times
}

export type SeatGroup = {
  color: string
  row: string
  number: number
  svgCoordinates: string
  id: string
  seatStatus: string
}
