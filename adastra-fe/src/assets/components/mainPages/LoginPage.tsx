import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Card,
  Popover,
  OverlayTrigger,
  Image,
} from "react-bootstrap"

import { useNavigate } from "react-router"
import { useState } from "react"

import { fetchLogin } from "../../fetchs"

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const loginArray = [email, password]

  const requiredPopover = (
    <Popover id="requeried-popover" className=" bg-danger-subtle">
      <Popover.Body className="text-danger-emphasis">
        <strong>Tutti i campi sono richiesti</strong>
      </Popover.Body>
    </Popover>
  )

  return (
    <Container>
      <Row lg={2} xs={1} className="my-5 justify-content-center">
        <Col className="justify-content-center justify-content-lg-end align-items-center d-flex">
          <Card className=" border-2 border-white">
            <Card.Img variant="top" src="https://placehold.co/400x200" />
            <Card.Body className="px-4">
              <Card.Title className="mt-2 mb-3">
                Registrazione utente
              </Card.Title>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    size="sm"
                    type="email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>password</Form.Label>
                  <Form.Control
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    size="sm"
                    type="password"
                  />
                </Form.Group>
                {loginArray.includes("") ? (
                  <div className="text-center">
                    <OverlayTrigger
                      delay={{ show: 100, hide: 400 }}
                      placement="top"
                      overlay={requiredPopover}
                    >
                      <Button
                        variant="buttons"
                        className="rounded-pill fw-semibold text-uppercase py-2 mb-4 mt-3"
                      >
                        registrati
                      </Button>
                    </OverlayTrigger>
                  </div>
                ) : (
                  <div className="text-center">
                    <Button
                      onClick={(e) => {
                        e.preventDefault()
                        fetchLogin(email, password)
                          .then((data) => {
                            localStorage.setItem(
                              "accessToken",
                              data.accessToken,
                            )
                          })
                          .catch((err) => console.error(err))
                      }}
                      variant="buttons"
                      className="rounded-pill fw-semibold text-uppercase py-2 mb-4 mt-3"
                    >
                      Login
                    </Button>
                  </div>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col className=" justify-content-center d-flex mt-5 mt-lg-0">
          <Row className="flex-column">
            <Image src="/logo-adastra.png" className="mb-4" />
            <Col className="px-4 text-center pb-0">
              <h5 className="mt-2 mb-3">Non sei ancora registrato?</h5>
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  navigate("/registrazione")
                }}
                variant="buttons"
                className="rounded-pill fw-semibold text-uppercase py-2 mb-4 mt-3"
              >
                Clicca qui!
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
