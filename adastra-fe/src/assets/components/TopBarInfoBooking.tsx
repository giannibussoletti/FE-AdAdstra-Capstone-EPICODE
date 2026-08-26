import { Row, Button, Col, Container } from "react-bootstrap"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { useNavigate } from "react-router"
import { resetState } from "../redux/reducers/TicketSlice"
import { RESET } from "../misc/variables"
import { calculateMovieTime } from "../misc/functions"
const TopBarInfoBooking = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const title = useAppSelector((state) => state.movieState.movieTitle)
  const screen = useAppSelector((state) => state.movieState.screen)
  const movieID = useAppSelector((state) => state.movieState.movieID)
  const date = useAppSelector((state) => state.movieState.date)
  const duration = useAppSelector((state) => state.movieState.duration)

  return (
    <Container fluid>
      <Row xs={1}>
        <Col className="p-0">
          <h1 className="m-0 py-4 text-uppercase w-100 text-center bg-text-field">
            {title}
          </h1>
        </Col>
        <Row className="bg-black m-0 py-3 px-5">
          <Col>
            <p className="mb-1 text-uppercase fw-semibold">sala {screen}</p>
            <p className="mb-1 text-uppercase fw-semibold">
              {new Date(date).toLocaleDateString()}
            </p>
            <p className="mb-1 text-uppercase fw-semibold">
              {calculateMovieTime(date, duration)}
            </p>
          </Col>
          <Col className="align-self-center text-end">
            <Button
              onClick={() => {
                navigate("/dettagli/" + movieID)
                dispatch(resetState(RESET))
              }}
              className="bg-buttons border-0 text-uppercase"
            >
              <FontAwesomeIcon
                icon={faPen}
                style={{ color: "rgb(255, 255, 255)" }}
              />
              modifica
            </Button>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}
export default TopBarInfoBooking
