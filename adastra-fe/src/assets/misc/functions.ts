import {
  GREEN,
  RED,
  BLUE,
  redSeat,
  blueSeat,
  greenSeat,
} from "../misc/variables"
import { manageSeat } from "../redux/reducers/TicketSlice"
import type { FillFunction } from "../misc/types"

export const fillSeat = ({
  e,
  fill,
  seat,
  color,
  maxSeats,
  rowLetter,
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
    const seatNumber = seat.number
    const seatLetter = seat.row
    const chosenNumbers = maxSeats.map((m) => m.number)
    const sameLetter = rowLetter === seatLetter
    const isNextSeat = chosenNumbers.includes(seatNumber + 1)
    const isBeforeSeat = chosenNumbers.includes(seatNumber - 1)
    const isFilled = target.style.fill
    if (
      !isNextSeat &&
      !isBeforeSeat &&
      maxSeats.length >= 1 &&
      sameLetter &&
      !target.style.fill
    ) {
      alert("è possibile prenotare solo posti adiacenti")
    } else if (
      isNextSeat &&
      isBeforeSeat &&
      maxSeats.length >= 1 &&
      sameLetter &&
      isFilled
    ) {
      alert("impossibile un posto in mezzo a due posti prenotati")
    } else if (!sameLetter && maxSeats.length >= 1) {
      window.alert("è possibile acquistare solo nella stessa fila")
    } else if (!isFilled && maxSeats.length < 10) {
      target.style.fill = fillColor
      dispatch(manageSeat({ seat, color, isAdding: true }))
    } else if (!isFilled && maxSeats.length === 10) {
      window.alert("è possibile acquistare un massimo di 10 posti")
    } else {
      target.style.fill = ""
      dispatch(manageSeat({ seat, color, isAdding: false }))
    }
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
