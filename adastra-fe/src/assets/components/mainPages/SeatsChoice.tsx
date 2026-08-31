import TheaterMap from "../TheaterMap"
import MainTitles from "../MainTitles"
import TicketsCount from "../TicketsCount"
import TopBarInfoBooking from "../TopBarInfoBooking"
import { redCost, blueCost, greenCost } from "../../misc/variables"
import { Container, Col, Row, Button } from "react-bootstrap"
import { useAppSelector } from "../../redux/hooks"
import { useNavigate } from "react-router"

const SeatsChoice = () => {
  const navigate = useNavigate()

  const greenSeatsPosition = useAppSelector(
    (state) => state.bookingState.greenSeatsPosition,
  )
  const redSeatsPosition = useAppSelector(
    (state) => state.bookingState.redSeatsPosition,
  )
  const blueSeatsPosition = useAppSelector(
    (state) => state.bookingState.blueSeatsPosition,
  )

  const totalRed = redSeatsPosition.length * redCost
  const totalBlue = blueSeatsPosition.length * blueCost
  const totalGreen = greenSeatsPosition.length * greenCost
  const totalCost = totalRed + totalBlue + totalGreen
  return (
    <>
      <TopBarInfoBooking />
      <Container fluid="lg">
        <Row xs={1} lg={2}>
          <Col className="p-0 px-lg-3">
            <TheaterMap />
          </Col>
          <Col className="mt-5">
            <Row>
              <Col className="text-center pb-4">
                <MainTitles string="totale biglietti" />
              </Col>
            </Row>
            <Col className="px-5">
              <TicketsCount
                totalRed={totalRed}
                totalBlue={totalBlue}
                totalGreen={totalGreen}
                redSeatsPosition={redSeatsPosition}
                greenSeatsPosition={greenSeatsPosition}
                blueSeatsPosition={blueSeatsPosition}
                totalCost={totalCost}
              />
            </Col>
            <Row className="px-5 mt-4">
              <Col className="text-center">
                <Button
                  onClick={() => navigate("/pagamento/")}
                  variant="buttons"
                  className="rounded-pill fw-semibold text-uppercase py-2"
                >
                  <span className="mx-3">verifica ed acquista</span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SeatsChoice
