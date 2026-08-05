import type { FooterTypes, MobileMenu, MoreInfoCard } from "./types"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
export const footerInfo: FooterTypes[] = [
  {
    id: 40,
    title: "informazioni",
    text: `Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
    eventKey: "41",
  },
  {
    id: 42,
    title: "privacy",
    text: `Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
    eventKey: "43",
  },
  {
    id: 44,
    title: "contatti",
    text: `Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.`,
    eventKey: "45",
  },
]

export const burgerMenuArray: MobileMenu[] = [
  { name: "bebo", link: "#", icon: faCircle },
  { name: "item", link: "#", icon: faCircle },
  { name: "item", link: "#", icon: faCircle },
  { name: "item", link: "#", icon: faCircle },
]
export const userMenuArray: MobileMenu[] = [
  { name: "user", link: "#", icon: faCircle },
  { name: "user", link: "#", icon: faCircle },
  { name: "user", link: "#", icon: faCircle },
  { name: "user", link: "#", icon: faCircle },
]
export const cityMenuArray: MobileMenu[] = [
  { name: "user", link: "#", icon: faCircle },
  { name: "user", link: "#", icon: faCircle },
  { name: "user", link: "#", icon: faCircle },
  { name: "user", link: "#", icon: faCircle },
]

export const moreInfoArray: MoreInfoCard[] = [
  { label: "lavora con noi", imgLink: "https://placehold.co/600x300" },
  { label: "poltrone vip", imgLink: "https://placehold.co/600x300" },
  { label: "Lorem ipsum", imgLink: "https://placehold.co/600x300" },
  { label: "Per le aziende", imgLink: "https://placehold.co/600x300" },
]
