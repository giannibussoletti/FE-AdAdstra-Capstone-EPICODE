import type { MobileMenu } from "../../misc/types"

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
  seats: string[]
  redSeats: number
  greenSeats: number
  blueSeats: number
  isAdding: boolean
  color: string
}

import type { SeatsInfo } from "../../misc/types"

export type DispatchSeat = {
  seat: SeatsInfo
  color: string
  isAdding: boolean
}
