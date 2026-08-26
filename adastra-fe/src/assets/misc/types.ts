import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import type { MouseEvent } from "react"
import type { ProfileType, SeatGroup } from "../fetchs/fetchTypes"
import type { ThunkDispatch, UnknownAction, Dispatch } from "@reduxjs/toolkit"
import type {
  MenuState,
  Booking,
  MovieState,
} from "../redux/reducers/SlicesTypes"

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
  maxSeats: SeatGroup[]
  rowLetter: string
  dispatch: ThunkDispatch<
    {
      menuState: MenuState
      bookingState: Booking
      movieState: MovieState
      userState: ProfileType
    },
    undefined,
    UnknownAction
  > &
    Dispatch<UnknownAction>
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

export type InfoCardAndDesktopNav = {
  label: string
  link: string
}
