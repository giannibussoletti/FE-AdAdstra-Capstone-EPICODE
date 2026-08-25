import { Spinner, Container, Row, Col, Button, Image } from "react-bootstrap"
import MainTitles from "./MainTitles"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import type { MovieDetails } from "../fetchs/fetchTypes"
import { fetchMovies } from "../fetchs"
const GeneralCinemaMovies = () => {
  const navigate = useNavigate()

  const [movies, setMovies] = useState<MovieDetails[]>()

  useEffect(() => {
    fetchMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <Container>
      <MainTitles string={"I nostri film"} />
      <Row xs={2} md={3} xl={6}>
        {movies ? (
          movies.slice(0, 6).map((movie) => {
            return (
              <Col
                key={movie.id}
                className="text-center mt-5 d-flex justify-content-between flex-column"
              >
                <div>
                  <Image
                    fluid
                    src={movie.posterLink}
                    alt={movie.title + " poster"}
                  />
                  <h5 className="text-uppercase mt-3">{movie.title}</h5>
                </div>
                <Button
                  onClick={() => navigate("/dettagli/" + movie.id)}
                  variant="buttons"
                  className="rounded-pill fw-semibold text-uppercase py-2 mt-1"
                >
                  <span className="mx-3">scheda film</span>
                </Button>
              </Col>
            )
          })
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  )
}

export default GeneralCinemaMovies
