import {
  GREEN,
  RED,
  BLUE,
  redSeat,
  blueSeat,
  greenSeat,
} from "../misc/variables"
import { manageSeat } from "../redux/reducers/TicketSlice"
import type {
  EmpyFunction,
  FillFunction,
  Menus,
  PropString,
} from "../misc/types"
import { useNavigate } from "react-router"
import type { useDispatch } from "react-redux"
import { resetUserState } from "../redux/reducers/UserSlice"
import type { MovieDetails } from "../fetchs/fetchTypes"

export const fillSeat = ({
  e,
  fill,
  seat,
  color,
  maxSeats,
  dispatch,
}: FillFunction) => {
  if (e.target instanceof SVGPathElement) {
    const fillColor =
      fill === RED
        ? redSeat
        : fill === BLUE
          ? blueSeat
          : fill === GREEN
            ? greenSeat
            : ""
    const target = e.target
    const isFilled = target.style.fill
    if (!isFilled && maxSeats.length < 10) {
      target.style.fill = fillColor
      dispatch(manageSeat({ seat, color, isAdding: true }))
    } else if (!isFilled && maxSeats.length === 10) {
      window.alert("è possibile acquistare un massimo di 10 posti")
    }
  }
}

export const emptySeat = ({ e, seat, color, dispatch }: EmpyFunction) => {
  if (e.target instanceof SVGPathElement) {
    e.target.style.fill = ""
    dispatch(manageSeat({ seat, color, isAdding: false }))
  }
}

export const calculateMovieTime = (date: string, duration: number) => {
  const hours = new Date(date).getHours()
  const minute = new Date(date).getMinutes()
  const time = new Date(date).getTime()
  const timeEnd = time + duration * 60000
  const endHours = new Date(timeEnd).getHours()
  const endMinute = new Date(timeEnd).getMinutes()
  return hours + ":" + minute + " - " + endHours + ":" + endMinute
}

export const handleMenuLink = (
  navigate: ReturnType<typeof useNavigate>,
  { string }: PropString,
) => {
  navigate("/" + string)
}
export const handleLogout = (
  navigate: ReturnType<typeof useNavigate>,
  dispatch: ReturnType<typeof useDispatch>,
) => {
  dispatch(resetUserState())
  navigate("/")
}

export const userMenuMapped = (
  navigate: ReturnType<typeof useNavigate>,
  dispatch: ReturnType<typeof useDispatch>,
  { link, label }: Menus,
) => {
  if (label !== "Esci") {
    handleMenuLink(navigate, { string: link })
  } else {
    handleLogout(navigate, dispatch)
  }
}

export const movieDetailsMapped = (movie: MovieDetails) => {
  return [
    { name: "Cast", details: movie.starring },
    { name: "Durata", details: movie.duration + "m" },
    {
      name: "Data di uscita",
      details: new Date(movie.releaseDate).toLocaleDateString(),
    },
  ]
}
