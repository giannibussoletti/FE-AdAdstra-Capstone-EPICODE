import { Container, Row, Col } from "react-bootstrap"
import CitySearch from "./CitySearch"
import MustSeeMovies from "./MustSeeMovies"
import HomeSlider from "./HomeSlider"
import PreSalesSlider from "./PreSalesSlider"
import NowPlayingSection from "./NowPlayingSection"
import CardMoreInfo from "./CardMoreInfo"
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
          <Col className="p-0 mb-3 pb-4 mb-lg-4">
            <MustSeeMovies />
          </Col>
          <hr />
        </Row>
        <Row>
          <Col className="mt-3 pb-4">
            <PreSalesSlider string="prevendite aperte" />
          </Col>
          <hr />
        </Row>
        <Row>
          <Col className="p-0 mt-3 pb-4">
            <NowPlayingSection />
          </Col>
        </Row>
        <Row>
          <Col className="p-0 mt-3">
            <CardMoreInfo />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Home
