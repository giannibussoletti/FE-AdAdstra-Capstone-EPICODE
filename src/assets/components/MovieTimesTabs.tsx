import { Tabs, Tab, Row, Col, Container } from "react-bootstrap"
import MovieStartTime from "./MovieStartTime"
import { dateChoice } from "../redux/reducers/MovieSlice"
import { useAppDispatch } from "../redux/hooks"
import type { MovieGroup } from "../fetchs/fetchTypes"
import { useNavigate } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { weekDay } from "../misc/arrays"

const MovieTimesTabs = ({ movie }: { movie: MovieGroup }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isDetailsPage = (movieId: string) => {
    const loc = location.pathname

    if (loc === "/dettagli/" + movieId) {
      return false
    } else {
      return true
    }
  }

  const dayName = (date: string) => {
    const i = new Date(date).getDay()
    const dNum = new Date(date).getDate()
    const dName = weekDay[i].slice(0, 3)

    return `${dName} ${dNum}`
  }

  return (
    <Container fluid className="p-0">
      <Tabs
        defaultActiveKey={0}
        className="mt-4 mt-xxl-0 py-1 d-flex overflow-scroll flex-nowrap no-break-tab-title"
        onSelect={(key) => {
          if (key) {
            dispatch(dateChoice({ date: key }))
          }
        }}>
        {Object.entries(movie.times).map(([date, screenTime], i) => {
          let sliced = screenTime
          if (sliced.length > 6 && isDetailsPage(movie.movieDetails.id)) sliced = sliced.slice(0, 6)
          return (
            <Tab key={date + screenTime[i] + i + i * 2} eventKey={i} title={dayName(date)}>
              <Row xs={1} md={4} lg={5} xxl={2} className="mt-4">
                {sliced.map((time) => {
                  return (
                    <Col key={time.screeningTimeId} className="pb-3 cursor-pointer">
                      <MovieStartTime
                        date={time.dateTime}
                        movieTitle={movie.movieDetails.title}
                        movieID={movie.movieDetails.id}
                        duration={movie.movieDetails.duration}
                        screen={time.screenNumber}
                        screenId={time.screenId}
                        screeningTimeId={time.screeningTimeId}
                      />
                    </Col>
                  )
                })}
              </Row>
              {screenTime.length > 6 && isDetailsPage(movie.movieDetails.id) && (
                <Col onClick={() => navigate("/dettagli/" + movie.movieDetails.id)}>
                  <h5 className="text-uppercase py-2 ps-2 cursor-pointer bg-gradient border border-1 border-light rounded-2">
                    <FontAwesomeIcon icon={faPlus} size="xs" /> Vedi tutti gli orari del film
                  </h5>
                </Col>
              )}
            </Tab>
          )
        })}
      </Tabs>
    </Container>
  )
}

export default MovieTimesTabs
