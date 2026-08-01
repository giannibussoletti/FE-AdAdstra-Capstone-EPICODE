import { Container, Row, Col } from "react-bootstrap"
import CitySearch from "./CitySearch"
import MustSeeMovies from "./MustSeeMovies"
const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="p-0 mt-2 mb-5">
          <CitySearch />
        </Col>
      </Row>
      <Row>
        <Col>
          <MustSeeMovies />
        </Col>
      </Row>
    </Container>
  )
}
export default Home
