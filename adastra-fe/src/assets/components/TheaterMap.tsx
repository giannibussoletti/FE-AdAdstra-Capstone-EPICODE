import {
  redSeatFirstRow,
  redSeatSecondRow,
  blueSeatFourthRow,
  blueSeatThirdRow,
  greenSeatFifthRow,
  greenSeatSixthRow,
  greenSeatSeventhRow,
  greenSeatEighthRow,
  blueSeatNinthRow,
  blueSeatTenthRow,
} from "../vector/theaterMapArrays"
import {
  GREEN,
  RED,
  BLUE,
  redSeat,
  blueSeat,
  greenSeat,
} from "../misc/variables"
import { useAppDispatch } from "../redux/hooks"
import { manageSeat } from "../redux/reducers/TicketSlice"
import type { FillFunction } from "../misc/types"

const TheaterMap = () => {
  const dispatch = useAppDispatch()

  const fillSeat = ({ e, fill, seat, color }: FillFunction) => {
    if (e.target instanceof SVGPathElement) {
      const target = e.target
      if (!target.style.fill) {
        target.style.fill = fill

        dispatch(manageSeat({ seat, color: color, isAdding: true }))
      } else {
        target.style.fill = ""
        dispatch(manageSeat({ seat, color: color, isAdding: false }))
      }
    }
  }
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
            <path
              className="cls-8"
              d="M176.95,552.25h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
            />
            <path
              className="cls-8"
              d="M220.31,552.25h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
            />
            <path
              className="cls-10"
              d="M233.7,562.45c-1.47,0-2.65-1.19-2.65-2.65s1.19-2.65,2.65-2.65,2.65,1.19,2.65,2.65-1.19,2.65-2.65,2.65ZM241.13,570.94h-5.31c-.59,0-1.06-.48-1.06-1.06v-1.06h4.25c.59,0,1.06-.48,1.06-1.06s-.48-1.06-1.06-1.06h-4.25v-2.12c0-.59-.48-1.06-1.06-1.06s-1.06.48-1.06,1.06v5.31c0,1.76,1.43,3.19,3.19,3.19h4.82l3.93,4.58c.38.44,1.04.5,1.49.13l2.12-1.77c.45-.38.51-1.05.14-1.5-.38-.45-1.05-.51-1.5-.14l-1.32,1.1-3.56-4.16c-.2-.24-.5-.37-.81-.37ZM233.7,580.5c2.78,0,5.38-1.36,6.97-3.64.33-.49.19-1.15-.29-1.47-.47-.32-1.11-.2-1.45.26-2.01,2.89-5.99,3.59-8.87,1.58-2.89-2.01-3.59-5.99-1.58-8.87.63-.91,1.49-1.63,2.49-2.11.52-.26.73-.9.47-1.43-.26-.51-.86-.72-1.38-.49-4.24,2.01-6.05,7.08-4.04,11.31,1.41,2.97,4.4,4.86,7.68,4.86Z"
            />
            <path
              className="cls-10"
              d="M190.34,562.45c-1.47,0-2.65-1.19-2.65-2.65s1.19-2.65,2.65-2.65,2.65,1.19,2.65,2.65-1.19,2.65-2.65,2.65ZM197.78,570.94h-5.31c-.59,0-1.06-.48-1.06-1.06v-1.06h4.25c.59,0,1.06-.48,1.06-1.06s-.48-1.06-1.06-1.06h-4.25v-2.12c0-.59-.48-1.06-1.06-1.06s-1.06.48-1.06,1.06v5.31c0,1.76,1.43,3.19,3.19,3.19h4.82l3.93,4.58c.38.44,1.04.5,1.49.13l2.12-1.77c.45-.38.51-1.05.14-1.5-.38-.45-1.05-.51-1.5-.14l-1.32,1.1-3.56-4.16c-.2-.24-.5-.37-.81-.37ZM190.34,580.5c2.78,0,5.38-1.36,6.97-3.64.33-.49.19-1.15-.29-1.47-.47-.32-1.11-.2-1.45.26-2.01,2.89-5.99,3.59-8.87,1.58-2.89-2.01-3.59-5.99-1.58-8.87.63-.91,1.49-1.63,2.49-2.11.52-.26.73-.9.47-1.43-.26-.51-.86-.72-1.38-.49-4.24,2.01-6.05,7.08-4.04,11.31,1.41,2.97,4.4,4.86,7.68,4.86Z"
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
            <path
              className="cls-2"
              d="M135.33,892.92h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
            />
            <text className="cls-11" transform="translate(176.72 918.32)">
              <tspan x="0" y="0">
                Rossa 00,0€
              </tspan>
            </text>
            <path
              className="cls-3"
              d="M494.22,892.92h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
            />
            <text className="cls-11" transform="translate(535.61 918.32)">
              <tspan x="0" y="0">
                Blu 00,0€
              </tspan>
            </text>
            <path
              className="cls-4"
              d="M824.92,892.92h33.15v26.7c0,3.56-2.89,6.46-6.46,6.46h-20.24c-3.56,0-6.46-2.89-6.46-6.46v-26.7h0Z"
            />
            <text className="cls-11" transform="translate(866.31 918.32)">
              <tspan x="0" y="0">
                Verde 00,0€
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
            {/* <!--Red seat --> */}
            <g>
              {redSeatFirstRow.map((seat) => {
                return (
                  <path
                    onClick={(e) =>
                      fillSeat({ e, fill: redSeat, seat, color: RED })
                    }
                    key={seat.coordinates + seat + RED}
                    className="cls-9"
                    d={seat.coordinates}
                  />
                )
              })}
              {redSeatSecondRow.map((seat) => {
                return (
                  <path
                    onClick={(e) =>
                      fillSeat({ e, fill: redSeat, seat, color: RED })
                    }
                    key={seat.coordinates + seat + RED}
                    className="cls-9"
                    d={seat.coordinates}
                  />
                )
              })}
            </g>
            {/* <!--Blue seat front --> */}
            <g>
              {blueSeatThirdRow.map((seat) => {
                return (
                  <path
                    onClick={(e) =>
                      fillSeat({
                        e,
                        fill: blueSeat,
                        seat,
                        color: BLUE,
                      })
                    }
                    key={seat.coordinates + seat + BLUE}
                    className="cls-1"
                    d={seat.coordinates}
                  />
                )
              })}
              {blueSeatFourthRow.map((seat) => {
                return (
                  <path
                    onClick={(e) =>
                      fillSeat({
                        e,
                        fill: blueSeat,
                        seat,
                        color: BLUE,
                      })
                    }
                    key={seat.coordinates + seat + BLUE}
                    className="cls-1"
                    d={seat.coordinates}
                  />
                )
              })}
            </g>
            {/* <!--Green seat --> */}
            <g>
              {greenSeatFifthRow.map((seat) => {
                return (
                  <path
                    onClick={(e) =>
                      fillSeat({
                        e,
                        fill: greenSeat,
                        seat,
                        color: GREEN,
                      })
                    }
                    key={seat.coordinates + seat + GREEN}
                    className="cls-7"
                    d={seat.coordinates}
                  />
                )
              })}
              {greenSeatSixthRow.map((seat) => {
                return (
                  <path
                    onClick={(e) =>
                      fillSeat({
                        e,
                        fill: greenSeat,
                        seat,
                        color: GREEN,
                      })
                    }
                    key={seat.coordinates + seat + GREEN}
                    className="cls-7"
                    d={seat.coordinates}
                  />
                )
              })}

              {greenSeatSeventhRow.map((seat) => {
                return (
                  <path
                    onClick={(e) =>
                      fillSeat({
                        e,
                        fill: greenSeat,
                        seat,
                        color: GREEN,
                      })
                    }
                    key={seat.coordinates + seat + GREEN}
                    className="cls-7"
                    d={seat.coordinates}
                  />
                )
              })}

              {greenSeatEighthRow.map((seat) => {
                return (
                  <path
                    onClick={(e) =>
                      fillSeat({
                        e,
                        fill: greenSeat,
                        seat,
                        color: GREEN,
                      })
                    }
                    key={seat.coordinates + seat + GREEN}
                    className="cls-7"
                    d={seat.coordinates}
                  />
                )
              })}
            </g>
            {/* <!--Blue seat back --> */}
            <g>
              {blueSeatNinthRow.map((seat) => {
                return (
                  <path
                    onClick={(e) =>
                      fillSeat({
                        e,
                        fill: blueSeat,
                        seat,
                        color: BLUE,
                      })
                    }
                    key={seat.coordinates + seat + BLUE}
                    className="cls-1"
                    d={seat.coordinates}
                  />
                )
              })}
              {blueSeatTenthRow.map((seat) => {
                return (
                  <path
                    onClick={(e) =>
                      fillSeat({
                        e,
                        fill: blueSeat,
                        seat,
                        color: BLUE,
                      })
                    }
                    key={seat.coordinates + seat + BLUE}
                    className="cls-1"
                    d={seat.coordinates}
                  />
                )
              })}
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default TheaterMap
