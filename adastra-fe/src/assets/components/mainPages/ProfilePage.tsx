import MainTitles from "../MainTitles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleInfo,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { handleLogout } from "../../misc/functions"

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const email = useAppSelector((state) => state.userState.email)
  const name = useAppSelector((state) => state.userState.name)
  const surname = useAppSelector((state) => state.userState.surname)
  const profilePicLink = useAppSelector(
    (state) => state.userState.profilePicLink,
  )

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
          <Row xs={1} className="py-1 pt-lg-0 pb-lg-1">
            <Col>
              {" "}
              <h4 className="f fw-normal text-uppercase mt-3 mt-lg-0 mb-2">
                i tuoi film più recenti
              </h4>
            </Col>
            <Col className="d-flex gap-3">
              <img className="rounded-3" src="./ticket-odissea.jpg" alt="" />
              <img className="rounded-3" src="./ticket-backrooms.jpg" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilePage
