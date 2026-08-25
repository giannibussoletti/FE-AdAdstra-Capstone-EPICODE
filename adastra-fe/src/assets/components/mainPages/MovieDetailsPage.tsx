import { useEffect, useState } from "react"
import { Container, Row, Col, Image, Spinner } from "react-bootstrap"
import { useParams } from "react-router"
import { fetchMovieDetails } from "../../fetchs"
import type { MovieDetails } from "../../fetchs/fetchTypes"

const MovieDetailsPage = () => {
  const params = useParams()
  const [details, setDetails] = useState<MovieDetails>()
  const movieId = params.movieId

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId)
        .then((data) => setDetails(data))
        .catch((err) => console.error(err))
    }

    return
  })

  return (
    <Container className="mt-5">
      <Row className="mt-4">
        {details ? (
          <>
            <Col xs="auto" md={3}>
              <Image fluid src={details.posterLink} />
            </Col>
            <Col xs={12} md={9} className="mt-0">
              <h4 className="fw-normal text-uppercase fw-medium mb-4">
                {details.title}
              </h4>
              <div className="mb-3">
                <p className="single-movie-title-section">Cast</p>
                <p className="single-movie-details-section">
                  {details.starring}
                </p>
              </div>
              <div className="mb-3">
                <p className="single-movie-title-section">Durata</p>
                <p className="single-movie-details-section">
                  {details.duration}min.
                </p>
              </div>
              <div className="d-none d-lg-block">
                <p>{details.plot}</p>
              </div>
            </Col>
          </>
        ) : (
          <Spinner animation="grow" variant="buttons" />
        )}
      </Row>
    </Container>
  )
}
export default MovieDetailsPage
