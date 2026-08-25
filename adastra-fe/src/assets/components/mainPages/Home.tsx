import { Container, Row, Col } from "react-bootstrap"
import GeneralCinemaMovies from "../GeneralCinemaMovies"
import HomeSlider from "../HomeSlider"
import MoviesComingSlider from "../MoviesComingSlider"
import NowPlayingSection from "../NowPlayingSection"
import CardMoreInfo from "../CardMoreInfo"
import { moreInfoArray } from "../../misc/arrays"
import { useAppSelector } from "../../redux/hooks"
const Home = () => {
  const cinema = useAppSelector((state) => state.menuState.cinemaId)

  return (
    <>
      <HomeSlider />
      <Container>
        {cinema == "" ? (
          <Row>
            <Col className="p-0 mt-4 mb-3 pb-4 mb-lg-4">
              <GeneralCinemaMovies />
            </Col>
            <hr />
          </Row>
        ) : (
          <>
            <Row>
              <Col className="mt-3 pb-4">
                <MoviesComingSlider string="prevendite aperte" />
              </Col>
              <hr />
            </Row>
            <Row>
              <Col className="p-0 mt-3 pb-4">
                <NowPlayingSection />
              </Col>
            </Row>
          </>
        )}

        <Row xs={1} md={2}>
          {moreInfoArray.map((card, i) => {
            return (
              <Col
                key={card.label + card.imgLink}
                className={i % 2 === 0 ? "ms-0 mt-3" : "me-0 mt-3"}
              >
                <CardMoreInfo link={card.imgLink} label={card.label} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
export default Home
