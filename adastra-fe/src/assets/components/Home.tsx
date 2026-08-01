import { Container, Row, Col } from "react-bootstrap"
import CitySearch from "./CitySearch"
import MustSeeMovies from "./MustSeeMovies"
import HomeSlider from "./HomeSlider"
import MovieSlider from "./MovieSlider"
const Home = () => {
  return (
    <>
      <HomeSlider />
      <Container>
        <Row>
          <Col className="p-0 mt-2 mb-5 mx-3">
            <CitySearch />
          </Col>
        </Row>
        <Row>
          <Col className="mx-3">
            <MustSeeMovies />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <MovieSlider string="ora in sala" />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <MovieSlider string="prevendite aperte" />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Home
