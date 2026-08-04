import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export type PropString = {
  string: string
}

export type Poster = {
  name: string
  link: string
  date: Date
  time: string
}

export type SliderPoster = {
  uniqueId: string
  posterLink: string
  originalTitle: string
}

export type ArrowSlider = {
  arrowDirectionIcon: IconDefinition
  arrowDirection: string
  arrowPosition: string
}

export type FooterTypes = {
  title: string
  text: string
}

export type MobileMenu = {
  name: string
  link: string
  icon: IconDefinition
}
