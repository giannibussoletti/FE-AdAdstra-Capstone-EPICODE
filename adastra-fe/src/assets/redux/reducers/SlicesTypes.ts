import type { NavBarMenus } from "../../misc/types"
import type {
  CinemaFetchType,
  MovieDetails,
  MovieGroup,
  SeatGroup,
} from "../../fetchs/fetchTypes"

//NAVBAR
export type MenuState = {
  isOpen: string
  cinemaSearchMenu: string
  arrayMenu: NavBarMenus[]
  isCinema: boolean
  arrayCinema: CinemaFetchType[]
  cinemaId: string
}

export type PayloadStateMenu = {
  isOpen: string
  arrayMenu: NavBarMenus[]
  isCinema: boolean
}

export type PayloadStateCinema = {
  isOpen: string
  cinemaSearchMenu: string
  isCinema: boolean
  arrayCinema: CinemaFetchType[]
}
//TICKET
export type Booking = {
  redSeatsPosition: SeatGroup[]
  greenSeatsPosition: SeatGroup[]
  blueSeatsPosition: SeatGroup[]
  redSeatsAmount: number
  greenSeatsAmount: number
  blueSeatsAmount: number
  isAdding: boolean
  color: string
  maxSeats: SeatGroup[]
  rowLetter: string
  totalCost: number
}

export type DispatchSeat = {
  seat: SeatGroup
  color: string
  isAdding: boolean
}

//Movie
export type MovieState = {
  movieID: string
  movieTitle: string
  timeStartEnd: string
  duration: number
  screen: number
  screenId: string
  date: string
  cinemaMovies: MovieGroup[]
  allMovies: MovieDetails[]
  screeningTimeId: string
}

export type DispatchMovie = {
  movieTitle: string
  duration: number
  movieID: string
  timeStart: string
  screen: number
  screenId: string
  screeningTimeId: string
}

export type DispatchTime = {
  screen: number
  timeStart: string
  screenId: string
}

export type DispatchDate = {
  date: string
}
