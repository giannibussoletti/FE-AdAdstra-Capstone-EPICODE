import { Carousel, Container, Row, Col, Button } from "react-bootstrap"
import { useAppSelector } from "../redux/hooks"
import { useNavigate } from "react-router"
const HomeSlider = () => {
  const navigate = useNavigate()

  const movies = useAppSelector((state) => state.movieState.allMovies)
  const banners = movies
    .filter((movie) => movie.bannerLink !== null)
    .flatMap((movie) => {
      return {
        link: movie.bannerLink,
        movieId: movie.id,
        movieName: movie.title,
        tagline: movie.tagline,
      }
    })
  console.log(banners)
  return (
    <Container fluid className="p-0 bg-text-fields">
      <Container>
        <Row>
          <Col className="p-0">
            <Carousel controls={false} indicators={false} className="mt-4">
              {banners.map((img) => {
                return (
                  <Carousel.Item
                    key={img.movieId}
                    interval={5000}
                    style={{ maxWidth: "1440px", maxHeight: "480px" }}>
                    <img
                      className="w-100"
                      style={{ objectFit: "cover" }}
                      src={img.link}
                      alt={img.movieName + " poster"}
                    />
                    <Carousel.Caption>
                      <Row>
                        <Col>
                          <h2 className="mb-1 mt-2 text-uppercase">{img.movieName}</h2>
                          <p>{img.tagline}</p>
                        </Col>
                        <Col xs={5} className="d-flex justify-content-center align-items-center ">
                          <Button
                            onClick={() => navigate("/dettagli/" + img.movieId)}
                            className="rounded-pill fw-semibold text-uppercase py-2 more-info-slider-button border-0">
                            <span className="mx-3">Maggiori informazioni</span>
                          </Button>
                        </Col>
                      </Row>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default HomeSlider
