import type { bottomCardInfo, FooterTypes, NavBarMenus } from "./types"
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

export const burgerMenu: NavBarMenus[] = [
  { label: "trailer", icon: faCircle, URL: "#" },
  { label: "coming soon", icon: faCircle, URL: "#" },
  { label: "adastra pass", icon: faCircle, URL: "#" },
  { label: "in sala", icon: faCircle, URL: "#" },
  { label: "pre-vendite", icon: faCircle, URL: "#" },
]
export const userMenu: NavBarMenus[] = [
  { label: "Profilo", icon: faCircle, URL: "/profilo" },
  { label: "Dettagli Account", icon: faCircle, URL: "#" },
  { label: "Esci", icon: faCircle, URL: "#" },
]

export const registerLoginMenu: NavBarMenus[] = [
  { label: "Login", icon: faCircle, URL: "/login" },
  { label: "Registrati", icon: faCircle, URL: "/registrazione" },
]

export const moreInfo: bottomCardInfo[] = [
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
