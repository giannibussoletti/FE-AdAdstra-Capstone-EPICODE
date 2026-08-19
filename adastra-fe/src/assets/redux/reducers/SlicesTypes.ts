import type { SeatsInfo, NavBarMenus, PositionInfo } from "../../misc/types"
import type { CinemaFetchType, MovieGroup } from "../../fetchs/fetchTypes"

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
  redSeatsPosition: PositionInfo[]
  greenSeatsPosition: PositionInfo[]
  blueSeatsPosition: PositionInfo[]
  redSeatsAmount: number
  greenSeatsAmount: number
  blueSeatsAmount: number
  isAdding: boolean
  color: string
  maxSeats: PositionInfo[]
  rowLetter: string
  totalCost: number
}

export type DispatchSeat = {
  seat: SeatsInfo
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
  date: string
  movies: MovieGroup[]
}

export type DispatchMovie = {
  movieTitle: string
  duration: number
  movieID: string
  timeStart: string
  screen: number
}

export type DispatchTime = {
  screen: number
  timeStart: string
}

export type DispatchDate = {
  date: string
}
