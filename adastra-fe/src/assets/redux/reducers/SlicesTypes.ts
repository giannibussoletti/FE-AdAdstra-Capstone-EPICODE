import type { NavBarMenus, PositionInfo } from "../../misc/types"

//NAVBAR
export type MenuState = {
  isOpen: string
  citySearchMenu: string
  arrayMenu: NavBarMenus[]
  isCities: boolean
  arrayCity: string[]
}

export type PayloadStateMenu = {
  isOpen: string
  arrayMenu: NavBarMenus[]
  isCities: boolean
}

export type PayloadStateCity = {
  isOpen: string
  citySearchMenu: string
  isCities: boolean
  arrayCity: string[]
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

import type { SeatsInfo } from "../../misc/types"

export type DispatchSeat = {
  seat: SeatsInfo
  color: string
  isAdding: boolean
}

//Movie
export type MovieState = {
  movieID: number
  movieTitle: string
  timeStartEnd: string
  duration: string
  screen: number
  date: string
}

export type DispatchMovie = {
  movieTitle: string
  duration: string
  movieID: number
}

export type DispatchTime = {
  screen: number
  timeStartEnd: string
}

export type DispatchDate = {
  date: string
}
