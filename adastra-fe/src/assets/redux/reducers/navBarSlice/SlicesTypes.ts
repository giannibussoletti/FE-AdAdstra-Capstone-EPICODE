import type { MobileMenu } from "../../../misc/types"

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
