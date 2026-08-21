import TicketsCount from "../TicketsCount"
import TopBarInfoBooking from "../TopBarInfoBooking"
import MainTitles from "../MainTitles"
import Buttons from "../Buttons"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { Form, Container, Row, Col } from "react-bootstrap"
import { updateEmail } from "../../redux/reducers/TicketSlice"
const PaymentPage = () => {
  const dispatch = useAppDispatch()

  const greenSeatsPosition = useAppSelector(
    (state) => state.bookingState.greenSeatsPosition,
  )
  const redSeatsPosition = useAppSelector(
    (state) => state.bookingState.redSeatsPosition,
  )
  const blueSeatsPosition = useAppSelector(
    (state) => state.bookingState.blueSeatsPosition,
  )

  const totalCost = useAppSelector((state) => state.bookingState.totalCost)

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
              onChange={(e) => dispatch(updateEmail(e.target.value))}
            />
          </Col>

          <Col>
            <h5 className="f fw-normal text-uppercase mt-3 mb-2">
              <Form.Label className="mb-0">inserisci coupon</Form.Label>
            </h5>
            <Form.Control />
          </Col>
        </Row>

        <Row xs={1} className="mt-5">
          <Col className="d-flex justify-content-between">
            <h2>totale</h2>
            <h2>{totalCost.toFixed(2)} €</h2>
          </Col>
          <Col className="text-center mt-4">
            <Buttons string="acquista" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PaymentPage
