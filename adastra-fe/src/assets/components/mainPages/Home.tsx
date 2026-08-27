import { Container, Row, Col } from "react-bootstrap"
import GeneralCinemaMovies from "../GeneralCinemaMovies"
import HomeSlider from "../HomeSlider"
import MoviesComingSlider from "../MoviesComingSlider"
import NowPlayingSection from "../NowPlayingSection"
import CardMoreInfo from "../CardMoreInfo"
import { moreInfo } from "../../misc/arrays"
import { useAppSelector } from "../../redux/hooks"
import { verifyAccessToken } from "../../fetchs"
import { useEffect } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { resetUserState } from "../../redux/reducers/UserSlice"
import { fetchMovies } from "../../fetchs"
import { AllMoviesArray } from "../../redux/reducers/MovieSlice"

const Home = () => {
  const dispatch = useAppDispatch()
  const cinema = useAppSelector((state) => state.menuState.cinemaId)
  const token = useAppSelector((state) => state.userState.accessToken)

  useEffect(() => {
    const initializeApp = async () => {
      const verifyTokenTask = token
        ? verifyAccessToken(token).catch(() => {
            dispatch(resetUserState())
          })
        : Promise.resolve()

      const fetchMoviesTask = fetchMovies()
        .then((data) => dispatch(AllMoviesArray(data)))
        .catch((err) => console.error("Errore fetch film:", err))

      await Promise.allSettled([verifyTokenTask, fetchMoviesTask])
    }

    initializeApp()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          {moreInfo.map((card, i) => {
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
