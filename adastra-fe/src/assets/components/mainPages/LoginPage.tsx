import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Card,
  Popover,
  OverlayTrigger,
} from "react-bootstrap"

import { useState } from "react"

import { fetchLogin } from "../../fetchs"

const LoginPage = () => {
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
      <Row className="justify-content-center align-items-center my-5">
        <Col className="justify-content-center align-items-center d-flex">
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
      </Row>
    </Container>
  )
}

export default LoginPage
