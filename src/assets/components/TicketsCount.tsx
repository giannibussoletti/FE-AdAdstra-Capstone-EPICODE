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

  useEffect(() => {
    dispatch(updatePrice(totalCost))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalCost])

  return (
    <>
      <Row className="text-uppercase fw-medium align-items-center px-5 mb-3">
        <Col className="d-flex align-items-center">
          <span className="seat-total seat-red" />
          Rosso
        </Col>
        <Col className="text-end">{totalRed.toFixed(2)} €</Col>
        <Col xs={12} className="mt-1 text-start">
          <span>
            {redSeatsPosition.map((pos, i) => {
              return (
                pos.row +
                pos.number +
                (i !== redSeatsPosition.length - 1 ? ", " : "")
              )
            })}
          </span>
          <span style={{ opacity: "0" }}>.</span>
        </Col>
      </Row>
      <Row className="text-uppercase fw-medium align-items-center px-5 mb-3">
        <Col className="d-flex align-items-center">
          <span className="seat-total seat-blue" />
          Blu
        </Col>
        <Col className="text-end">{totalBlue.toFixed(2)} €</Col>
        <Col xs={12} className="mt-1 text-start">
          <span>
            {blueSeatsPosition.map((pos, i) => {
              return (
                pos.row +
                pos.number +
                (i !== blueSeatsPosition.length - 1 ? ", " : "")
              )
            })}
          </span>
          <span style={{ opacity: "0" }}>.</span>
        </Col>
      </Row>
      <Row className="text-uppercase fw-medium align-items-center px-5 mb-3">
        <Col className="d-flex align-items-center">
          <span className="seat-total seat-green" />
          Verde
        </Col>
        <Col className="text-end">{totalGreen.toFixed(2)} €</Col>
        <Col xs={12} className="mt-1 text-start">
          <span>
            {greenSeatsPosition.map((pos, i) => {
              return (
                pos.row +
                pos.number +
                (i !== greenSeatsPosition.length - 1 ? ", " : "")
              )
            })}
          </span>
          <span style={{ opacity: "0" }}>.</span>
        </Col>
      </Row>
    </>
  )
}

export default TicketsCount
