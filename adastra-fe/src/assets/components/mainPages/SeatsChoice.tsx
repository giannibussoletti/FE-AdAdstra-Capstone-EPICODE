import TheaterMap from "../TheaterMap"
import MainTitles from "../MainTitles"
import Buttons from "../Buttons"
import TicketsCount from "../TicketsCount"
import TopBarInfoBooking from "../TopBarInfoBooking"
import { redCost, blueCost, greenCost } from "../../misc/variables"
import { Container, Col, Row } from "react-bootstrap"
import { useAppSelector } from "../../redux/hooks"
import { useNavigate } from "react-router"

const SeatsChoice = () => {
  const navigate = useNavigate()

  const redTicketsAmount = useAppSelector(
    (state) => state.bookingState.redSeatsAmount,
  )
  const blueTicketsAmount = useAppSelector(
    (state) => state.bookingState.blueSeatsAmount,
  )
  const greenTicketsAmount = useAppSelector(
    (state) => state.bookingState.greenSeatsAmount,
  )

  const greenSeatsPosition = useAppSelector(
    (state) => state.bookingState.greenSeatsPosition,
  )
  const redSeatsPosition = useAppSelector(
    (state) => state.bookingState.redSeatsPosition,
  )
  const blueSeatsPosition = useAppSelector(
    (state) => state.bookingState.blueSeatsPosition,
  )

  const totalRed = redTicketsAmount * redCost
  const totalBlue = blueTicketsAmount * blueCost
  const totalGreen = greenTicketsAmount * greenCost
  const totalCost = totalRed + totalBlue + totalGreen
  return (
    <>
      <TopBarInfoBooking />
      <Container fluid="lg">
        <Row xs={1} lg={2}>
          <Col className="p-0 px-lg-3">
            <TheaterMap />
          </Col>
          <Col className=" mt-5">
            <Row>
              <Col className="text-center pb-4">
                <MainTitles string="totale biglietti" />
              </Col>
            </Row>
            <Col className="px-5">
              <TicketsCount
                redSeatsPosition={redSeatsPosition}
                greenSeatsPosition={greenSeatsPosition}
                blueSeatsPosition={blueSeatsPosition}
                totalCost={totalCost}
              />
            </Col>
            <Row className="px-5 mt-4">
              <Col
                className="text-center"
                onClick={() => navigate("/pagamento/")}
              >
                <Buttons string="verifica ed acquista" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SeatsChoice
