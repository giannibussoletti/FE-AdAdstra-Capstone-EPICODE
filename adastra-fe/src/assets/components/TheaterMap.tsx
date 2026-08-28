import {
  GREEN,
  RED,
  BLUE,
  redCost,
  blueCost,
  greenCost,
  redSeat,
  blueSeat,
  greenSeat,
} from "../misc/variables"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { useEffect, useState } from "react"
import { fetchBookedSeats, fetchSeats } from "../fetchs"
import type { SeatGroup } from "../fetchs/fetchTypes"
import { emptySeat, fillSeat } from "../misc/functions"
const TheaterMap = () => {
  const dispatch = useAppDispatch()
  const [seats, setSeats] = useState<SeatGroup[]>([])
  const [bookedSeats, setBookedSeats] = useState<SeatGroup[]>([])
  const maxSeats = useAppSelector((state) => state.bookingState.maxSeats)
  const tempSeats = maxSeats.map((seat) => seat.id)
  const bookedId = bookedSeats.map((seat) => seat.id)
  const seatsFiltered = seats.filter(
    (seat) => !bookedId.includes(seat.id) && !tempSeats.includes(seat.id),
  )

  const cinemaId = useAppSelector((state) => state.menuState.cinemaId)
  const screenId = useAppSelector((state) => state.movieState.screenId)
  const screeningTimeId = useAppSelector(
    (state) => state.movieState.screeningTimeId,
  )

  useEffect(() => {
    fetchSeats(cinemaId, screenId)
      .then((data) => {
        setSeats(data)
      })
      .catch((err) => console.error(err))

    fetchBookedSeats(screeningTimeId)
      .then((data) => {
        setBookedSeats(data)
      })
      .catch((err) => console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <svg
      id="theater-map"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1130 1000"
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          {/* <!--Background things--> */}
          <g>
            <rect className="cls-10" width="1130" height="1000" />
            <path
              className="cls-5"
              d="M133.63,119.1s130.07-45.17,429.32-45.17,429.32,45.17,429.32,45.17"
            />
            {/* Posto diversamente abili
            <g>
              <path
                className="cls-8"
                d="M176.95,552.25h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
              />
              <path
                className="cls-8"
                d="M220.31,552.25h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
              />
              <path
                className="cls-6"
                d="M263.66,552.25h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
              />
              <path
                className="cls-6"
                d="M307.02,552.25h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
              />
              <path
                className="cls-6"
                d="M350.38,552.25h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
              />
              <path
                className="cls-6"
                d="M393.73,552.25h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
              />
            </g> */}
            <path
              className="cls-10"
              d="M233.7,562.45c-1.47,0-2.65-1.19-2.65-2.65s1.19-2.65,2.65-2.65,2.65,1.19,2.65,2.65-1.19,2.65-2.65,2.65ZM241.13,570.94h-5.31c-.59,0-1.06-.48-1.06-1.06v-1.06h4.25c.59,0,1.06-.48,1.06-1.06s-.48-1.06-1.06-1.06h-4.25v-2.12c0-.59-.48-1.06-1.06-1.06s-1.06.48-1.06,1.06v5.31c0,1.76,1.43,3.19,3.19,3.19h4.82l3.93,4.58c.38.44,1.04.5,1.49.13l2.12-1.77c.45-.38.51-1.05.14-1.5-.38-.45-1.05-.51-1.5-.14l-1.32,1.1-3.56-4.16c-.2-.24-.5-.37-.81-.37ZM233.7,580.5c2.78,0,5.38-1.36,6.97-3.64.33-.49.19-1.15-.29-1.47-.47-.32-1.11-.2-1.45.26-2.01,2.89-5.99,3.59-8.87,1.58-2.89-2.01-3.59-5.99-1.58-8.87.63-.91,1.49-1.63,2.49-2.11.52-.26.73-.9.47-1.43-.26-.51-.86-.72-1.38-.49-4.24,2.01-6.05,7.08-4.04,11.31,1.41,2.97,4.4,4.86,7.68,4.86Z"
            />
            <path
              className="cls-10"
              d="M190.34,562.45c-1.47,0-2.65-1.19-2.65-2.65s1.19-2.65,2.65-2.65,2.65,1.19,2.65,2.65-1.19,2.65-2.65,2.65ZM197.78,570.94h-5.31c-.59,0-1.06-.48-1.06-1.06v-1.06h4.25c.59,0,1.06-.48,1.06-1.06s-.48-1.06-1.06-1.06h-4.25v-2.12c0-.59-.48-1.06-1.06-1.06s-1.06.48-1.06,1.06v5.31c0,1.76,1.43,3.19,3.19,3.19h4.82l3.93,4.58c.38.44,1.04.5,1.49.13l2.12-1.77c.45-.38.51-1.05.14-1.5-.38-.45-1.05-.51-1.5-.14l-1.32,1.1-3.56-4.16c-.2-.24-.5-.37-.81-.37ZM190.34,580.5c2.78,0,5.38-1.36,6.97-3.64.33-.49.19-1.15-.29-1.47-.47-.32-1.11-.2-1.45.26-2.01,2.89-5.99,3.59-8.87,1.58-2.89-2.01-3.59-5.99-1.58-8.87.63-.91,1.49-1.63,2.49-2.11.52-.26.73-.9.47-1.43-.26-.51-.86-.72-1.38-.49-4.24,2.01-6.05,7.08-4.04,11.31,1.41,2.97,4.4,4.86,7.68,4.86Z"
            />
            <path
              className="cls-2"
              d="M135.33,892.92h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
            />
            <text className="cls-11" transform="translate(176.72 918.32)">
              <tspan x="0" y="0">
                Rossa {redCost.toLocaleString()}€
              </tspan>
            </text>
            <path
              className="cls-3"
              d="M494.22,892.92h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
            />
            <text className="cls-11" transform="translate(535.61 918.32)">
              <tspan x="0" y="0">
                Blu {blueCost.toLocaleString()}€
              </tspan>
            </text>
            <path
              className="cls-4"
              d="M824.92,892.92h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
            />
            <text className="cls-11" transform="translate(866.31 918.32)">
              <tspan x="0" y="0">
                Verde {greenCost.toLocaleString()}€
              </tspan>
            </text>
            <text className="cls-12" transform="translate(419.22 166.17)">
              <tspan x="0" y="0">
                SCHERMO
              </tspan>
            </text>
          </g>
          {/* <!--Seats--> */}
          <g>
            {seatsFiltered.map((seat) => {
              return (
                <path
                  onClick={(e) =>
                    fillSeat({
                      e,
                      fill: seat.color,
                      seat,
                      color: seat.color,
                      maxSeats,
                      dispatch,
                    })
                  }
                  key={
                    seat.svgCoordinates +
                    seat.id +
                    seat.row +
                    seat.number +
                    seat.color
                  }
                  className={
                    seat.color === RED
                      ? "cls-9"
                      : seat.color === BLUE
                        ? "cls-1"
                        : seat.color === GREEN
                          ? "cls-7"
                          : ""
                  }
                  d={seat.svgCoordinates}
                />
              )
            })}
            {maxSeats.length > 0
              ? maxSeats.map((seat) => {
                  return (
                    <path
                      onClick={(e) =>
                        emptySeat({ e, seat, color: seat.color, dispatch })
                      }
                      fill={
                        seat.color === RED
                          ? redSeat
                          : seat.color === BLUE
                            ? blueSeat
                            : seat.color === GREEN
                              ? greenSeat
                              : ""
                      }
                      key={
                        seat.svgCoordinates +
                        seat.id +
                        seat.row +
                        seat.number +
                        seat.color
                      }
                      stroke={
                        seat.color === RED
                          ? redSeat
                          : seat.color === BLUE
                            ? blueSeat
                            : seat.color === GREEN
                              ? greenSeat
                              : ""
                      }
                      d={seat.svgCoordinates}
                    />
                  )
                })
              : null}

            {bookedSeats.map((seat) => {
              return (
                <path
                  fill={
                    seat.color === RED
                      ? redSeat
                      : seat.color === BLUE
                        ? blueSeat
                        : seat.color === GREEN
                          ? greenSeat
                          : ""
                  }
                  key={
                    seat.svgCoordinates +
                    seat.id +
                    seat.row +
                    seat.number +
                    seat.color
                  }
                  stroke={
                    seat.color === RED
                      ? redSeat
                      : seat.color === BLUE
                        ? blueSeat
                        : seat.color === GREEN
                          ? greenSeat
                          : ""
                  }
                  d={seat.svgCoordinates}
                />
              )
            })}
          </g>
        </g>
      </g>
    </svg>
  )
}

export default TheaterMap
