import type { bottomCardInfo, FooterTypes, NavBarMenus } from "./types"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

export const burgerMenu: NavBarMenus[] = [
  {
    label: "trailer",
    icon: faCircle,
    link: "#",
  },
  {
    label: "coming soon",
    icon: faCircle,
    link: "#",
  },
  {
    label: "adastra pass",
    icon: faCircle,
    link: "#",
  },
  {
    label: "in sala",
    icon: faCircle,
    link: "#",
  },
]

export const userMenu: NavBarMenus[] = [
  {
    label: "Profilo",
    icon: faCircle,
    link: "/profilo",
  },
  {
    label: "Dettagli Account",
    icon: faCircle,
    link: "#",
  },
  {
    label: "Esci",
    icon: faCircle,
    link: "/",
  },
]

export const registerLoginMenu: NavBarMenus[] = [
  {
    label: "Login",
    icon: faCircle,
    link: "/login",
  },
  {
    label: "Registrati",
    icon: faCircle,
    link: "/registrazione",
  },
]

export const moreInfo: bottomCardInfo[] = [
  {
    label: "lavora con noi",
    imgLink: "https://placehold.co/600x300",
    link: "#",
  },
  {
    label: "poltrone vip",
    imgLink: "https://placehold.co/600x300",
    link: "#",
  },
  {
    label: "Lorem ipsum",
    imgLink: "https://placehold.co/600x300",
    link: "#",
  },
  {
    label: "Per le aziende",
    imgLink: "https://placehold.co/600x300",
    link: "#",
  },
]

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
