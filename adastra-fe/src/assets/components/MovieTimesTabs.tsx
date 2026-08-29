import { Tabs, Tab, Row, Col, Container } from "react-bootstrap"
import MovieStartTime from "./MovieStartTime"
import { dateChoice } from "../redux/reducers/MovieSlice"
import { useAppDispatch } from "../redux/hooks"
import type { MovieGroup } from "../fetchs/fetchTypes"

const MovieTimesTabs = ({ movie }: { movie: MovieGroup }) => {
  const dispatch = useAppDispatch()

  return (
    <Container fluid className="p-0">
      <Tabs
        defaultActiveKey={0}
        id="uncontrolled-tab-example"
        className="mt-4 mt-xxl-0"
        onSelect={(key) => {
          if (key) {
            dispatch(dateChoice({ date: key }))
          }
        }}
      >
        {Object.entries(movie.times).map(([date, screenTime], i) => (
          <Tab
            key={date + screenTime[i] + i + i * 2}
            eventKey={i}
            title={new Date(date).toLocaleDateString()}
          >
            <Row xs={1} md={4} lg={5} xxl={2} className="mt-4">
              {screenTime.map((time) => {
                return (
                  <Col
                    key={time.screeningTimeId}
                    className="pb-3 cursor-pointer"
                  >
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
          </Tab>
        ))}
      </Tabs>
    </Container>
  )
}

export default MovieTimesTabs
