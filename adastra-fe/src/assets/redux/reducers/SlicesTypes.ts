import type { MobileMenu, PositionInfo } from "../../misc/types"

//NAVBAR
export type MenuState = {
  isOpen: string
  citySearchMenu: string
  arrayMenu: MobileMenu[]
  isCities: boolean
  arrayCity: string[]
}

export type PayloadStateMenu = {
  isOpen: string
  arrayMenu: MobileMenu[]
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
  maxSeats: SeatsInfo[]
}

import type { SeatsInfo } from "../../misc/types"

export type DispatchSeat = {
  seat: SeatsInfo
  color: string
  isAdding: boolean
}
