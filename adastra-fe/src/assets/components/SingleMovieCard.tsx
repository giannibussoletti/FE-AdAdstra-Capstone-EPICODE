import { Row, Col, Image, Tab, Tabs } from "react-bootstrap"
import MovieStartTime from "./MovieStartTime"
import { dateChoice } from "../redux/reducers/MovieSlice"
import { useLocation } from "react-router"
import { useEffect, useState } from "react"
import { fetchScreenTimes } from "../fetchs"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { moviesArray } from "../redux/reducers/MovieSlice"
import type { MovieGroup } from "../fetchs/fetchTypes"

const SingleMovieCard = () => {
  const cinemaId = useAppSelector((state) => state.menuState.cinemaId)
  const dispatch = useAppDispatch()
  const [movies, setMovies] = useState<MovieGroup[]>([])

  useEffect(() => {
    fetchScreenTimes(cinemaId)
      .then((data) => {
        setMovies(data)
        dispatch(moviesArray(data))
      })
      .catch((err) => console.error(err))
  }, [cinemaId])

  const pathname = useLocation().pathname

  return (
    <>
      {movies.map((movie) => {
        return (
          <Row className="mt-4">
            <Col xs={pathname !== "/" ? "auto" : 3} md={3}>
              <Image fluid src="https://placehold.co/1500x2000" />
            </Col>
            <Col
              xs={pathname !== "/" ? 12 : 9}
              md={9}
              className={pathname !== "/" ? "mt-4" : "mt-0"}
            >
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
              <div className={pathname !== "/" ? "" : "d-none d-lg-block"}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit iusto pariatur facilis perferendis quod, nobis
                  dolore, minus distinctio consectetur exercitationem, quaerat
                  odio excepturi? Vel labore commodi alias dolorem quae dolores.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores architecto autem dolores earum eius temporibus
                  repellat vero quod suscipit natus velit, modi incidunt
                  reprehenderit. Maiores non dolorem sit recusandae aspernatur?
                </p>
              </div>
            </Col>

            <Tabs
              defaultActiveKey={0}
              id="uncontrolled-tab-example"
              className="mt-4"
              onSelect={(selectedKey) => {
                if (selectedKey) {
                  dispatch(dateChoice({ date: selectedKey }))
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
                            movieTitle={movie.movieDetails.title}
                            movieID={movie.movieDetails.id}
                            duration={movie.movieDetails.duration}
                            timeStart={time.dateTime}
                            screen={time.screenNumber}
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
    </>
  )
}

export default SingleMovieCard
