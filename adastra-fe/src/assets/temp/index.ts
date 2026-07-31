export const province = [
  "Roma",
  "Milano",
  "Napoli",
  "Torino",
  "Palermo",
  "Genova",
  "Bologna",
  "Firenze",
]

export const arrayMapImg = [
  "https://placehold.co/600x300",
  "https://placehold.co/600x300",
  "https://placehold.co/600x300",
]

// Questa forse la tengo
export const randomNum = Math.ceil(Math.random() * 1200)

type Poster = {
  nome: string
  link: string
}

export const arrayPoster: Poster[] = [
  { nome: "backrooms", link: "img/backrooms.jpg" },
  { nome: "evil dead", link: "img/evil_dead.jpg" },
  { nome: "moana", link: "img/moana.jpg" },
  { nome: "obsession", link: "img/obsession.jpg" },
  { nome: "odissey", link: "img/odissey.jpg" },
  { nome: "supergirl", link: "img/supergirl.jpg" },
  { nome: "toy story", link: "img/toystory.jpg" },
]
