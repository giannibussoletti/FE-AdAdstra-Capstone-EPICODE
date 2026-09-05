import { Container, Row, Col, Button, Image } from "react-bootstrap"
import MainTitles from "./MainTitles"
import { useNavigate } from "react-router"
import { useAppSelector } from "../redux/hooks"

const GeneralCinemaMovies = () => {
  const navigate = useNavigate()

  const movies = useAppSelector((state) => state.movieState.allMovies)

  return (
    <Container>
      <MainTitles string={"I nostri film"} />
      <Row xs={2} md={3} xl={4}>
        {movies.slice(0, 12).map((movie) => {
          return (
            <Col key={movie.id} className="d-flex">
              <Col className="text-center d-flex justify-content-between flex-column mb-5 p-3 p-md-4 rounded-3 shadow-lg bg-gradient">
                <div>
                  <Image
                    fluid
                    src={movie.posterLink}
                    alt={movie.title + " poster"}
                    className=" rounded-2"
                  />
                  <h6 className="text-uppercase mt-3">{movie.title}</h6>
                </div>
                <Button
                  onClick={() => navigate("/dettagli/" + movie.id)}
                  variant="buttons"
                  className="rounded-pill fw-semibold text-uppercase py-2 mt-1 ">
                  <span className="mx-0 mx-md-3 d-none d-sm-inline">scheda film</span>
                  <span className="mx-0 d-sm-none">info</span>
                </Button>
              </Col>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default GeneralCinemaMovies
