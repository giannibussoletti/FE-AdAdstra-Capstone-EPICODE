import { useEffect, useState } from "react"
import { Container, Row, Col, Image, Spinner, Accordion, Button } from "react-bootstrap"
import { useParams } from "react-router"
import { fetchMovieDetails } from "../../fetchs"
import type { MovieDetails } from "../../fetchs/fetchTypes"
import { movieDetailsMapped } from "../../misc/functions"
import MovieTimesTabs from "../MovieTimesTabs"
import { useAppSelector } from "../../redux/hooks"
import { useNavigate } from "react-router"
const MovieDetailsPage = () => {
  const navigate = useNavigate()
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="mt-5">
      <Row className="mt-4 px-5 p-lg-0">
        {details ? (
          <>
            <Col xs="auto" lg={4} xxl={cinemaId && findMovie ? 3 : 4}>
              <Image fluid src={details.posterLink} />
            </Col>
            <Col xs={12} lg={8} xxl={cinemaId && findMovie ? 5 : 8} className="mt-3 mt-lg-0">
              <h2 className="fw-normal text-uppercase fw-medium mb-4">{details.title}</h2>

              {movieDetailsMapped(details).map((detail, i) => {
                return (
                  <div key={detail.details + detail.name + "0" + i} className="mb-3">
                    <p className="single-movie-title-section">{detail.name}</p>
                    <p className="single-movie-details-section">{detail.details}</p>
                  </div>
                )
              })}
              <Accordion className="d-lg-none">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className=" fs-4 fw-medium">TRAMA</span>
                  </Accordion.Header>
                  <Accordion.Body className="m-0 p-0">
                    <p>{details.plot}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="d-none d-lg-block">
                <p>{details.plot}</p>
              </div>
            </Col>
            <Col xs={12}>
              <Button
                onClick={() => navigate(-1)}
                variant="buttons"
                className="rounded-2 fw-semibold text-uppercase py-2 my-3">
                <span className="mx-3">Torna indietro </span>
              </Button>
            </Col>
            {cinemaId && findMovie && (
              <Col xxl={4}>
                <MovieTimesTabs movie={findMovie} />
              </Col>
            )}
          </>
        ) : (
          <Spinner animation="grow" variant="buttons" />
        )}
      </Row>
    </Container>
  )
}
export default MovieDetailsPage
