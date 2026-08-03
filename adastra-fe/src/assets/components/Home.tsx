import { Container, Row, Col } from "react-bootstrap"
import CitySearch from "./CitySearch"
import MustSeeMovies from "./MustSeeMovies"
import HomeSlider from "./HomeSlider"
import PreSalesSlider from "./PreSalesSlider"
import SingleMovieCard from "./SingleMovieCard"
const Home = () => {
  return (
    <>
      <HomeSlider />
      <Container>
        <Row>
          <Col className="p-0 mt-4 mb-5">
            <CitySearch />
          </Col>
        </Row>
        <Row>
          <Col className="p-0 mb-3 mb-lg-4">
            <MustSeeMovies />
          </Col>
        </Row>

        <hr />
        <Row>
          <Col>
            <PreSalesSlider string="prevendite aperte" />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <SingleMovieCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Home
