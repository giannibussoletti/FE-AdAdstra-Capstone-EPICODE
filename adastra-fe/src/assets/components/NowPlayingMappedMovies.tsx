import { Row, Col, Image, Tab, Tabs, Container } from "react-bootstrap"
import MovieStartTime from "./MovieStartTime"
import { dateChoice } from "../redux/reducers/MovieSlice"
import { useEffect, useState } from "react"
import { fetchScreenTimes } from "../fetchs"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { cinemaMoviesArray } from "../redux/reducers/MovieSlice"
import type { MovieGroup } from "../fetchs/fetchTypes"

const NowPlayingMappedMovies = () => {
  const cinemaId = useAppSelector((state) => state.menuState.cinemaId)
  const dispatch = useAppDispatch()
  const [movies, setMovies] = useState<MovieGroup[]>([])

  useEffect(() => {
    fetchScreenTimes(cinemaId)
      .then((data) => {
        setMovies(data)
        dispatch(cinemaMoviesArray(data))
      })
      .catch((err) => console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cinemaId])

  return (
    <Container className="mt-5">
      {movies.map((movie) => {
        return (
          <Row className="mt-4">
            <Col xs="auto" md={3}>
              <Image fluid src={movie.movieDetails.posterLink} />
            </Col>
            <Col xs={12} md={9} className="mt-0">
              <h4 className="fw-normal text-uppercase fw-medium mb-4">
                {movie.movieDetails.title}
              </h4>
              <div className="mb-3">
                <p className="single-movie-title-section">Cast</p>
                <p className="single-movie-details-section">
                  {movie.movieDetails.starring}
                </p>
              </div>
              <div className="mb-3">
                <p className="single-movie-title-section">Durata</p>
                <p className="single-movie-details-section">
                  {movie.movieDetails.duration}h
                </p>
              </div>
              <div className="mb-3">
                <p className="single-movie-title-section">Data di uscita</p>
                <p className="single-movie-details-section">
                  {new Date(
                    movie.movieDetails.releaseDate,
                  ).toLocaleDateString()}
                </p>
              </div>
              <div className="d-none d-lg-block">
                <p>{movie.movieDetails.plot}</p>
              </div>
            </Col>

            <Tabs
              defaultActiveKey={0}
              id="uncontrolled-tab-example"
              className="mt-4"
              onSelect={(key) => {
                if (key) {
                  dispatch(dateChoice({ date: key }))
                }
              }}
            >
              {Object.entries(movie.times).map(([date, screenTime], i) => (
                <Tab eventKey={i} title={new Date(date).toLocaleDateString()}>
                  <Row xs={1} md={4} lg={5} xxl={6} className="mt-4">
                    {screenTime.map((time) => {
                      return (
                        <Col className="px-2 pb-3 cursor-pointer">
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
          </Row>
        )
      })}
    </Container>
  )
}

export default NowPlayingMappedMovies
