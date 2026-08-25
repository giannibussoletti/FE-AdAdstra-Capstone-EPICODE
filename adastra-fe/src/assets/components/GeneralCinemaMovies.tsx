import { Spinner, Container, Row, Col, Button } from "react-bootstrap"
import MainTitles from "./MainTitles"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import type { MovieType } from "../fetchs/fetchTypes"
import { fetchMovies } from "../fetchs"
const GeneralCinemaMovies = () => {
  const navigate = useNavigate()

  const [movies, setMovies] = useState<MovieType[]>()

  useEffect(() => {
    fetchMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.error(err))
  })

  return (
    <Container>
      <MainTitles string={"I nostri film"} />
      <Row>
        {movies ? (
          movies.map((movie) => {
            return (
              <Col key={movie.id} className="text-center">
                <img src={movie.posterLink} alt={movie.title + " poster"} />
                <h5 className="text-uppercase">{movie.title}</h5>
                <Button
                  onClick={() => navigate("/dettagli/" + movie.id)}
                  variant="buttons"
                  className="rounded-pill fw-semibold text-uppercase py-2"
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
