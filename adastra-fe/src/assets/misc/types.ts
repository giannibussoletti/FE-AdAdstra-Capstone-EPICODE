import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type PropString = {
  string: string
}

export type TopSlider = {
  id: number
  slide: string
}

export type Poster = {
  name: string
  link: string
  date: Date
  time: string
}

export type PosterID = Poster & {
  id: number
}

export type SliderPoster = {
  posterLink: string
  originalTitle: string
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
