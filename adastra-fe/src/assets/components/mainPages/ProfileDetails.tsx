import { useEffect } from "react"
import { useAppSelector } from "../../redux/hooks"
import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { fetchUserMovies } from "../../fetchs"
const ProfileDetails = () => {
  const name = useAppSelector((state) => state.userState.name)
  const surname = useAppSelector((state) => state.userState.surname)
  const email = useAppSelector((state) => state.userState.email)
  const profilePicLink = useAppSelector(
    (state) => state.userState.profilePicLink,
  )
  const birthDate = useAppSelector((state) => state.userState.birthDate)

  useEffect(() => {
    fetchUserMovies()
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <Container className="justify-content-center align-items-center text-center d-flex pt-5">
      <Row xs={1} className="g-2">
        <Col>
          <Image roundedCircle src={profilePicLink} />
        </Col>
        <Col>
          <p>
            {name} {surname}
          </p>
          <p>Data di nascita: {new Date(birthDate).toLocaleDateString()}</p>
        </Col>
        <Col>
          <Row xs={1} className="g-3">
            <Col>
              Email: {email}
              <Button>Modifica</Button>
            </Col>
            <Col>
              Password: {String.fromCharCode(9679).repeat(15)}
              <Button>Modifica</Button>
            </Col>
          </Row>
        </Col>
        <Col>I tuoi film:</Col>
      </Row>
    </Container>
  )
}

export default ProfileDetails
