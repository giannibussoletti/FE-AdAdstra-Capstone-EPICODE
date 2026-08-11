import type { FooterTypes, Menus, NavBarMenus } from "./types"
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

export const burgerMenuArray: NavBarMenus[] = [
  { label: "trailer", imgLink: "#", icon: faCircle, URL: "#" },
  { label: "coming soon", imgLink: "#", icon: faCircle, URL: "#" },
  { label: "adastra pass", imgLink: "#", icon: faCircle, URL: "#" },
  { label: "in sala", imgLink: "#", icon: faCircle, URL: "#" },
  { label: "pre-vendite", imgLink: "#", icon: faCircle, URL: "#" },
]
export const userMenuArray: NavBarMenus[] = [
  { label: "user", imgLink: "#", icon: faCircle, URL: "#" },
  { label: "user", imgLink: "#", icon: faCircle, URL: "#" },
  { label: "user", imgLink: "#", icon: faCircle, URL: "#" },
  { label: "user", imgLink: "#", icon: faCircle, URL: "#" },
]

export const moreInfoArray: Menus[] = [
  {
    label: "lavora con noi",
    imgLink: "https://placehold.co/600x300",
    URL: "#",
  },
  { label: "poltrone vip", imgLink: "https://placehold.co/600x300", URL: "#" },
  { label: "Lorem ipsum", imgLink: "https://placehold.co/600x300", URL: "#" },
  {
    label: "Per le aziende",
    imgLink: "https://placehold.co/600x300",
    URL: "#",
  },
]
