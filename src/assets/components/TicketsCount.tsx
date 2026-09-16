import { Row, Col } from "react-bootstrap"
import type { TicketTypes } from "../misc/types"
import { useAppDispatch } from "../redux/hooks"
import { useEffect } from "react"
import { updatePrice } from "../redux/reducers/TicketSlice"

const TicketsCount = ({
  redSeatsPosition,
  greenSeatsPosition,
  blueSeatsPosition,
  totalCost,
  totalRed,
  totalBlue,
  totalGreen,
}: TicketTypes) => {
  const dispatch = useAppDispatch()

  const seatsTotals = [
    { label: "Rosso", class: "red", total: totalRed, seats: redSeatsPosition },
    { label: "Blu", class: "blue", total: totalBlue, seats: blueSeatsPosition },
    { label: "Verde", class: "green", total: totalGreen, seats: greenSeatsPosition },
  ]

  useEffect(() => {
    dispatch(updatePrice(totalCost))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalCost])

  return (
    <>
      {seatsTotals.map((info) => {
        return (
          <Row
            key={info.label + "-" + info.class}
            className="text-uppercase fw-medium align-items-center mb-4">
            <Col className="d-flex align-items-center">
              <span className={"seat-total seat-" + info.class} />
              {info.label}
            </Col>
            <Col className="text-end">{info.total.toFixed(2)} €</Col>
            <Col xs={12} className="mt-2 text-start">
              <span>
                {info.seats.map((pos, i) => {
                  return pos.row + pos.number + (i !== info.seats.length - 1 ? ", " : "")
                })}
              </span>
              <span style={{ opacity: "0" }}>.</span>
            </Col>
          </Row>
        )
      })}
    </>
  )
}

export default TicketsCount
