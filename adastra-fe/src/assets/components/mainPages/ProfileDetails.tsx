import { useEffect, useState } from "react"
import { useAppSelector } from "../../redux/hooks"
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
  ListGroup,
} from "react-bootstrap"
import { fetchUserMovies } from "../../fetchs"
import type { UserMovies } from "../../fetchs/fetchTypes"
const ProfileDetails = () => {
  const name = useAppSelector((state) => state.userState.name)
  const surname = useAppSelector((state) => state.userState.surname)
  const email = useAppSelector((state) => state.userState.email)
  const profilePicLink = useAppSelector(
    (state) => state.userState.profilePicLink,
  )
  const birthDate = useAppSelector((state) => state.userState.birthDate)
  const [userMovies, setUserMovies] = useState<UserMovies[]>([])

  useEffect(() => {
    fetchUserMovies()
      .then((data) => setUserMovies(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <Container className="justify-content-center align-items-center d-flex pt-5">
      <Row xs={1} md={2}>
        <Col>
          <Row className="justify-content-center align-items-center">
            <Col className="text-center">
              <Image
                style={{
                  minHeight: "150px",
                  maxHeight: "150px",
                  minWidth: "150px",
                  maxWidth: "150px",
                }}
                roundedCircle
                src={profilePicLink}
              />
              <h3 className="text-capitalize mt-3">
                {name} {surname}
              </h3>
              <p className="text-subtext-time">
                Data di nascita: {new Date(birthDate).toLocaleDateString()}
              </p>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="mb-0">Email:</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    style={{ width: "auto" }}
                    size="sm"
                    disabled
                    plaintext
                    defaultValue={email}
                    className="text-light"
                  />
                  <Button
                    size="sm"
                    variant="buttons"
                    className="rounded-pill fw-semibold text-uppercase py-2 ms-auto"
                  >
                    <span className="mx-2">Modifica</span>
                  </Button>
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className="mb-0">Password:</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    style={{ width: "auto" }}
                    size="sm"
                    disabled
                    plaintext
                    type="password"
                    className="text-light"
                    defaultValue={String.fromCharCode(9679).repeat(15)}
                  />
                  <Button
                    size="sm"
                    variant="buttons"
                    className="rounded-pill fw-semibold text-uppercase py-2 ms-auto"
                  >
                    <span className="mx-2">Modifica</span>
                  </Button>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col>
          <h5>I tuoi film:</h5>
          {userMovies.length > 0 ? (
            <ListGroup>
              {userMovies.map((movie) => {
                return (
                  <ListGroup.Item
                    action
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span>{movie.title}</span>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          ) : (
            "Ops semnra che tu non abbia visto film nell'ultimo anno 🤔"
          )}
        </Col>
      </Row>
      {/* <Col>
          <Form.Label>Disabled file input example</Form.Label>
          <Form.Control type="file" />
        </Col> */}
    </Container>
  )
}

export default ProfileDetails
