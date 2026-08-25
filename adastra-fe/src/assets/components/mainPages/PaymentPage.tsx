import TicketsCount from "../TicketsCount"
import TopBarInfoBooking from "../TopBarInfoBooking"
import MainTitles from "../MainTitles"
import Buttons from "../Buttons"
import { useAppSelector } from "../../redux/hooks"
import { Form, Container, Row, Col } from "react-bootstrap"

import { fetchBooking } from "../../fetchs"
import { useState } from "react"
const PaymentPage = () => {
  const screenTimeId = useAppSelector(
    (state) => state.movieState.screeningTimeId,
  )
  const maxSeats = useAppSelector((state) => state.bookingState.maxSeats)
  const totalCost = useAppSelector((state) => state.bookingState.totalCost)
  const greenSeatsPosition = useAppSelector(
    (state) => state.bookingState.greenSeatsPosition,
  )
  const redSeatsPosition = useAppSelector(
    (state) => state.bookingState.redSeatsPosition,
  )
  const blueSeatsPosition = useAppSelector(
    (state) => state.bookingState.blueSeatsPosition,
  )

  const [guestEmail, setEmail] = useState("")
  const [coupon, setCoupon] = useState("")

  return (
    <>
      <TopBarInfoBooking />
      <Container className="mt-4 px-5 px-md-0">
        <Row xs={1} className="text-center">
          <Col>
            <MainTitles string="i tuoi biglietti" />
          </Col>

          <Col className="mt-3">
            <TicketsCount
              redSeatsPosition={redSeatsPosition}
              greenSeatsPosition={greenSeatsPosition}
              blueSeatsPosition={blueSeatsPosition}
              totalCost={totalCost}
            />
          </Col>
        </Row>
        <Row xs={1} md={2} className="mb-3 p-0 mt-3 mt-md-0">
          <Col>
            <h5 className="f fw-normal text-uppercase mt-3 mb-2">
              <Form.Label className="mb-0">inserisci la tua mail</Form.Label>
            </h5>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>

          <Col>
            <h5 className="f fw-normal text-uppercase mt-3 mb-2">
              <Form.Label className="mb-0">inserisci coupon</Form.Label>
            </h5>
            <Form.Control onChange={(e) => setCoupon(e.target.value)} />
          </Col>
        </Row>

        <Row xs={1} className="mt-5">
          <Col className="d-flex justify-content-between">
            <h2>totale</h2>
            <h2>{totalCost.toFixed(2)} €</h2>
          </Col>
          <Col
            className="text-center mt-4"
            onClick={() =>
              fetchBooking(
                screenTimeId,
                maxSeats,
                totalCost,
                guestEmail,
                coupon,
              )
            }
          >
            <Buttons string="acquista" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PaymentPage
