import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import type { MouseEvent } from "react"

export type TopSlider = {
  id: number
  slide: string
}

export type Poster = {
  id: number
  name: string
  link: string
  date: Date
  time: string
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

export type MobileMenu = {
  name: string
  link: string
  icon: IconDefinition
}

export type InfoCardAndDesktopNav = {
  label: string
  link: string
}

export type PositionInfo = {
  id: string
  letter: string
  number: number
}

export type SeatsInfo = {
  id: string
  SVGcoordinates: string
  position: PositionInfo
}

export type FillFunction = {
  e: MouseEvent<SVGPathElement>
  fill: string
  seat: SeatsInfo
  color: string
}

export type PropString = {
  string: string
}

export type TicketTypes = {
  redSeatsPosition: PositionInfo[]
  greenSeatsPosition: PositionInfo[]
  blueSeatsPosition: PositionInfo[]
  totalCost: number
}
