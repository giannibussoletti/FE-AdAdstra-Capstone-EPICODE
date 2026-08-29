import { useEffect, useState } from "react"
import { Container, Row, Col, Image, Spinner } from "react-bootstrap"
import { useParams } from "react-router"
import { fetchMovieDetails } from "../../fetchs"
import type { MovieDetails } from "../../fetchs/fetchTypes"
import { movieDetailsMapped } from "../../misc/functions"
import MovieTimesTabs from "../MovieTimesTabs"
import { useAppSelector } from "../../redux/hooks"
const MovieDetailsPage = () => {
  const params = useParams()
  const [details, setDetails] = useState<MovieDetails>()
  const movieId = params.movieId
  const movies = useAppSelector((state) => state.movieState.cinemaMovies)
  const cinemaId = useAppSelector((state) => state.menuState.cinemaId)
  const findMovie = movies.find((movie) => movie.movieDetails.id === movieId)
  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId)
        .then((data) => setDetails(data))
        .catch((err) => console.error(err))
    }
    return
  }, [])

  return (
    <Container className="mt-5">
      <Row className="mt-4">
        {details ? (
          <>
            <Col xs="auto" md={3}>
              <Image fluid src={details.posterLink} />
            </Col>
            <Col xs={12} md={9} className="mt-3 mt-md-0">
              <h2 className="fw-normal text-uppercase fw-medium mb-4">
                {details.title}
              </h2>

              {movieDetailsMapped(details).map((detail, i) => {
                return (
                  <div
                    key={detail.details + detail.name + "0" + i}
                    className="mb-3"
                  >
                    <p className="single-movie-title-section">{detail.name}</p>
                    <p className="single-movie-details-section">
                      {detail.details}
                    </p>
                  </div>
                )
              })}
              <div>
                <p>{details.plot}</p>
              </div>
            </Col>

            {cinemaId && findMovie && <MovieTimesTabs movie={findMovie!} />}
          </>
        ) : (
          <Spinner animation="grow" variant="buttons" />
        )}
      </Row>
    </Container>
  )
}
export default MovieDetailsPage
