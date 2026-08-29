import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import type { MouseEvent } from "react"
import type { SeatGroup } from "../fetchs/fetchTypes"
import type { AppDispatch } from "../redux/store"

export type TopSlider = {
  id: number
  slide: string
}

export type Poster = {
  movieID: string
  movieTitle: string
  imglink: string
}

export type PosterReleaseDate = Poster & {
  date: Date
  duration: number
}

export type ArrowSlider = {
  arrowDirectionIcon: IconDefinition
  arrowDirection: string
  arrowPosition: string
  arrowFunction: () => void
}

export type FooterTypes = {
  id: number
  title: string
  text: string
  eventKey: string
}

export type Menus = {
  label: string
  link: string
}

export type NavBarMenus = Menus & {
  icon: IconDefinition
}

export type bottomCardInfo = Menus & {
  imgLink: string
}

export type EmptyFunction = {
  e: MouseEvent<SVGPathElement>
  seat: SeatGroup
  color: string
  dispatch: AppDispatch
}

export type FillFunction = EmptyFunction & {
  fill: string
  maxSeats: SeatGroup[]
  handleOpen: () => void
}

export type PropString = {
  string: string
}

export type TicketTypes = {
  redSeatsPosition: SeatGroup[]
  greenSeatsPosition: SeatGroup[]
  blueSeatsPosition: SeatGroup[]
  totalCost: number
  totalRed: number
  totalBlue: number
  totalGreen: number
}

export type InfoCardAndDesktopNav = {
  label: string
  link: string
}

export type ModalInfo = {
  message: string
  title: string
  show: boolean
  handleClose: () => void
  icon: IconDefinition
  style: string
  buttonText: string
}
