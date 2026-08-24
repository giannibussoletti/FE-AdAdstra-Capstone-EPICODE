import MainTitles from "../MainTitles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faTicket } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col, Image } from "react-bootstrap"
import { useEffect, useState } from "react"
import { fetchProfile } from "../../fetchs"
import { setUserState } from "../../redux/reducers/UserSlice"
import { useAppDispatch } from "../../redux/hooks"
import type { ProfileType } from "../../fetchs/fetchTypes"

const ProfilePage = () => {
  const dispatch = useAppDispatch()

  const [profile, setProfile] = useState<ProfileType>()

  useEffect(() => {
    fetchProfile()
      .then((data) => {
        setProfile(data)
        dispatch(
          setUserState({
            name: data.name,
            surname: data.surname,
            email: data.email,
            birthDate: data.birthDate,
            profilePicLink: data.profilePicLink,
            username: data.username,
          }),
        )
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
              <Image fluid src={profile?.profilePicLink} roundedCircle />
            </Col>
            <Col>
              {profile?.name + " " + profile?.surname} <br /> {profile?.email}
            </Col>
          </Row>
          <hr />
          <Row className="py-1">
            <Col>
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "rgb(255, 255, 255)" }}
                size="xl"
              />
              <span className="ms-2">Dettagli Account</span>
            </Col>
          </Row>
          <hr />
          <Row className="py-1">
            <Col>
              <FontAwesomeIcon
                icon={faTicket}
                size="xl"
                style={{ color: "rgb(255, 255, 255)" }}
              />
              <span className="ms-2">I tuoi biglietti</span>
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
