import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import type { MouseEvent } from "react"
import type { SeatGroup } from "../fetchs/fetchTypes"

export type TopSlider = {
  id: number
  slide: string
}

export type Poster = {
  movieID: number
  movieTitle: string
  imglink: string
  duration: string
}

export type PosterReleaseDate = Poster & {
  date: Date
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
  imgLink: string
  URL: string
}

export type NavBarMenus = Menus & {
  icon: IconDefinition
}

export type FillFunction = {
  e: MouseEvent<SVGPathElement>
  fill: string
  seat: SeatGroup
  color: string
}

export type PropString = {
  string: string
}

export type TicketTypes = {
  redSeatsPosition: SeatGroup[]
  greenSeatsPosition: SeatGroup[]
  blueSeatsPosition: SeatGroup[]
  totalCost: number
}
