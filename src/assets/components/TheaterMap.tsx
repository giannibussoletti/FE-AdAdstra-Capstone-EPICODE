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
import ResponseModal from "./ResponseModal"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
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
  const screeningTimeId = useAppSelector((state) => state.movieState.screeningTimeId)
  const bgMapColor = "#000000"
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleOpen = () => setShow(true)

  useEffect(() => {
    const initializeApp = async () => {
      const fetchSeatsTask = fetchSeats(cinemaId, screenId)
        .then((data) => {
          setSeats(data)
        })
        .catch((err) => console.error(err))

      const fetchBookedSeatsTask = fetchBookedSeats(screeningTimeId)
        .then((data) => {
          setBookedSeats(data)
        })
        .catch((err) => console.error(err))

      await Promise.allSettled([fetchSeatsTask, fetchBookedSeatsTask])
    }

    initializeApp()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <svg
        id="theater-map"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1130 1000">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            {/* <!--Background things--> */}
            <g>
              <defs>
                <radialGradient id="backgroundMap" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={bgMapColor} stopOpacity="0.8" />

                  <stop offset="100%" stopColor={bgMapColor} stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect className="cls-10" width="1130" height="1000" />
              {/*Lettere e numeri*/}
              <g>
                <g>
                  <text className="letterAndNumbers" transform="translate(74.13 332.84)">
                    <tspan x="0" y="0">
                      A
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(73.82 381.3)">
                    <tspan x="0" y="0">
                      B
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(73.11 429.76)">
                    <tspan x="0" y="0">
                      C
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(71.67 478.22)">
                    <tspan x="0" y="0">
                      D
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(74.93 577.74)">
                    <tspan x="0" y="0">
                      E
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(75.37 626.23)">
                    <tspan x="0" y="0">
                      F
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(72.36 674.71)">
                    <tspan x="0" y="0">
                      G
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(71.85 723.19)">
                    <tspan x="0" y="0">
                      H
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(74.63 771.67)">
                    <tspan x="0" y="0">
                      L
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(70.03 820.15)">
                    <tspan x="0" y="0">
                      M
                    </tspan>
                  </text>
                </g>
                <g>
                  <text className="letterAndNumbers" transform="translate(148.31 269.54)">
                    <tspan x="0" y="0">
                      1
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(189.07 269.54)">
                    <tspan x="0" y="0">
                      2
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(232.45 269.54)">
                    <tspan x="0" y="0">
                      3
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(274.57 269.54)">
                    <tspan x="0" y="0">
                      4
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(319.14 269.54)">
                    <tspan x="0" y="0">
                      5
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(361.95 269.54)">
                    <tspan x="0" y="0">
                      6
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(405.54 269.54)">
                    <tspan x="0" y="0">
                      7
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(448.31 269.54)">
                    <tspan x="0" y="0">
                      8
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(492.02 269.54)">
                    <tspan x="0" y="0">
                      9
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(530.02 269.54)">
                    <tspan x="0" y="0">
                      10
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(577.16 269.54)">
                    <tspan x="0" y="0">
                      11
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(617.92 269.54)">
                    <tspan x="0" y="0">
                      12
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(661.3 269.54)">
                    <tspan x="0" y="0">
                      13
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(703.42 269.54)">
                    <tspan x="0" y="0">
                      14
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(747.99 269.54)">
                    <tspan x="0" y="0">
                      15
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(790.8 269.54)">
                    <tspan x="0" y="0">
                      16
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(834.4 269.54)">
                    <tspan x="0" y="0">
                      17
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(877.16 269.54)">
                    <tspan x="0" y="0">
                      18
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(920.87 269.54)">
                    <tspan x="0" y="0">
                      19
                    </tspan>
                  </text>
                  <text className="letterAndNumbers" transform="translate(961 269.54)">
                    <tspan x="0" y="0">
                      20
                    </tspan>
                  </text>
                </g>
              </g>
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
                  {redCost.toLocaleString()}€
                </tspan>
              </text>
              <path
                className="cls-3"
                d="M494.22,892.92h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
              />
              <text className="cls-11" transform="translate(535.61 918.32)">
                <tspan x="0" y="0">
                  {blueCost.toLocaleString()}€
                </tspan>
              </text>
              <path
                className="cls-4"
                d="M824.92,892.92h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
              />
              <text className="cls-11" transform="translate(866.31 918.32)">
                <tspan x="0" y="0">
                  {greenCost.toLocaleString()}€
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
                        handleOpen,
                      })
                    }
                    key={seat.svgCoordinates + seat.id + seat.row + seat.number + seat.color}
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
                        onClick={(e) => emptySeat({ e, seat, color: seat.color, dispatch })}
                        fill={
                          seat.color === RED
                            ? redSeat
                            : seat.color === BLUE
                              ? blueSeat
                              : seat.color === GREEN
                                ? greenSeat
                                : ""
                        }
                        key={seat.svgCoordinates + seat.id + seat.row + seat.number + seat.color}
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
                    key={seat.svgCoordinates + seat.id + seat.row + seat.number + seat.color}
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

      <ResponseModal
        message={"è possibile acquistare un massimo di 10 posti"}
        title={"Attenzione"}
        show={show}
        handleClose={handleClose}
        icon={faCircleExclamation}
        style={RED}
        buttonText={"Ok"}
      />
    </>
  )
}

export default TheaterMap
