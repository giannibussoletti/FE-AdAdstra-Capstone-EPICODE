import TicketsCount from "../TicketsCount"
import TopBarInfoBooking from "../TopBarInfoBooking"
import MainTitles from "../MainTitles"
import Buttons from "../Buttons"
import { useAppSelector } from "../../redux/hooks"
import {
  Form,
  Container,
  Row,
  Col,
  FormCheck,
  ButtonGroup,
  Button,
} from "react-bootstrap"
const PaymentPage = () => {
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
      <Container className="mt-5">
        <div className="text-center pb-4">
          <MainTitles string="i tuoi biglietti" />
        </div>

        <TicketsCount
          redSeatsPosition={redSeatsPosition}
          greenSeatsPosition={greenSeatsPosition}
          blueSeatsPosition={blueSeatsPosition}
          totalCost={totalCost}
        />
      </Container>
      <Container>
        <Row className="mb-4">
          <Col>
            <h5 className="f fw-normal text-uppercase mt-3 mb-2">
              <Form.Label className="mb-0">inserisci la tua mail</Form.Label>
            </h5>
            <Form.Control />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="f fw-normal text-uppercase mt-3 mb-2">
              <Form.Label className="mb-0">inserisci coupon</Form.Label>
            </h5>
            <Form.Control />
          </Col>
        </Row>
        <Row className="mb-3 mt-5 p-0">
          <Col className="d-flex justify-content-between">
            <h2>totale</h2>
            <h2>{totalCost.toFixed(2)} €</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5 className="f fw-normal text-uppercase mt-3 mb-2">
              scegli il metodo di pagamento
            </h5>
            <Form>
              <ButtonGroup>
                <Button>
                  <FormCheck
                    name="paycheck"
                    type={"radio"}
                    id={`default-radio-1`}
                    label={`1`}
                  />
                </Button>

                <FormCheck
                  name="paycheck"
                  type={"radio"}
                  id={`default-radio-2`}
                  label={`default radio`}
                />
              </ButtonGroup>
            </Form>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Buttons string="acquista" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PaymentPage
