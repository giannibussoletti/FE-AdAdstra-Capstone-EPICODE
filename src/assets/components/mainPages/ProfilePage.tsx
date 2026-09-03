import MainTitles from "../MainTitles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { handleLogout, sortingMovies } from "../../misc/functions"
import { useEffect, useState } from "react"
import { fetchUserMovies } from "../../fetchs"
import { setUserMovies } from "../../redux/reducers/UserSlice"
import TicketUserProfile from "../TicketUserProfile"
import type { UserMovies } from "../../fetchs/fetchTypes"

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const email = useAppSelector((state) => state.userState.email)
  const name = useAppSelector((state) => state.userState.name)
  const surname = useAppSelector((state) => state.userState.surname)
  const profilePicLink = useAppSelector((state) => state.userState.profilePicLink)
  const [userMovies, setMovies] = useState<UserMovies[]>([])

  useEffect(() => {
    fetchUserMovies()
      .then((data) => {
        dispatch(setUserMovies(sortingMovies(data)))
        setMovies(sortingMovies(data))
      })
      .catch((err) => console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="mt-5 px-5">
      <Row className="py-1">
        <Col>
          <MainTitles string="il tuo profilo" />
        </Col>
      </Row>
      <Row xs={1} lg={2}>
        <Col>
          <Row className="align-items-center">
            <Col xs={"auto"}>
              <Image
                className="border border-5"
                src={profilePicLink}
                style={{
                  maxHeight: "100px",
                  maxWidth: "100px",
                  minHeight: "100px",
                  minWidth: "100px",
                }}
                roundedCircle
              />
            </Col>
            <Col>
              {name + " " + surname} <br /> {email}
            </Col>
          </Row>
          <hr />
          <Row className="py-1">
            <Col onClick={() => navigate("/dettagli-profilo")}>
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "rgb(255, 255, 255)" }}
                size="xl"
              />
              <span className="ms-2 cursor-pointer">Dettagli Account</span>
            </Col>
          </Row>
          <hr />
          <Row className="py-1">
            <Col onClick={() => handleLogout(navigate, dispatch)}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className="ms-2 cursor-pointer">Esci</span>
            </Col>
          </Row>
          <hr className="d-block d-lg-none" />
        </Col>
        <Col>
          <Row className="py-1 pt-lg-0 pb-lg-1">
            <Col xs={12} className="p-0">
              {" "}
              <h4 className="f fw-normal text-uppercase mt-3 mt-lg-0 mb-3">
                i tuoi film più recenti
              </h4>
            </Col>
            {userMovies.slice(0, 2).map((movie) => {
              return (
                <Col key={movie.movieId}>
                  <TicketUserProfile details={movie} />
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilePage
