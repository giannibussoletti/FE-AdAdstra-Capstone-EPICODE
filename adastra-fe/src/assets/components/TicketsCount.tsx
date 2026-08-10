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
}: TicketTypes) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(updatePrice(totalCost))
  }, [totalCost])

  return (
    <>
      {totalCost === 0 ? (
        <Row className="text-uppercase fw-medium align-items-center">
          <Col className="d-flex align-items-center">
            <span className="seat-total bg-body" />
            Colore
          </Col>
          <Col className="text-end">{totalCost.toFixed(2)} €</Col>
          <Col xs={12} className="mt-1">
            <span>
              {redSeatsPosition.map((pos, i) => {
                return pos.id + (i !== redSeatsPosition.length - 1 ? ", " : "")
              })}
            </span>
            <span style={{ opacity: "0" }}>.</span>
          </Col>
        </Row>
      ) : (
        ""
      )}
      {redSeatsPosition.length > 0 ? (
        <Row className="text-uppercase fw-medium align-items-center px-5">
          <Col className="d-flex align-items-center">
            <span className="seat-total seat-red" />
            Rosso
          </Col>
          <Col className="text-end">{totalCost.toFixed(2)} €</Col>
          <Col xs={12} className="mt-1">
            <span>
              {redSeatsPosition.map((pos, i) => {
                return pos.id + (i !== redSeatsPosition.length - 1 ? ", " : "")
              })}
            </span>
            <span style={{ opacity: "0" }}>.</span>
          </Col>
        </Row>
      ) : (
        ""
      )}
      {blueSeatsPosition.length > 0 ? (
        <Row className="text-uppercase fw-medium align-items-center px-5">
          <Col className="d-flex align-items-center">
            <span className="seat-total seat-blue" />
            Blu
          </Col>
          <Col className="text-end">{totalCost.toFixed(2)} €</Col>
          <Col xs={12} className="mt-1">
            <span>
              {blueSeatsPosition.map((pos, i) => {
                return pos.id + (i !== blueSeatsPosition.length - 1 ? ", " : "")
              })}
            </span>
            <span style={{ opacity: "0" }}>.</span>
          </Col>
        </Row>
      ) : (
        ""
      )}
      {greenSeatsPosition.length > 0 ? (
        <Row className="text-uppercase fw-medium align-items-center px-5">
          <Col className="d-flex align-items-center">
            <span className="seat-total seat-green" />
            Verde
          </Col>
          <Col className="text-end">{totalCost.toFixed(2)} €</Col>
          <Col xs={12} className="mt-1">
            <span>
              {greenSeatsPosition.map((pos, i) => {
                return (
                  pos.id + (i !== greenSeatsPosition.length - 1 ? ", " : "")
                )
              })}
            </span>
            <span style={{ opacity: "0" }}>.</span>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  )
}

export default TicketsCount
