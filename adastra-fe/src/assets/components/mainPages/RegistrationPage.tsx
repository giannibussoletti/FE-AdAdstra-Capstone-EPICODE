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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const RegistrationPage = () => {
  const [name, setName] = useState<string>()
  const [surname, setSurname] = useState<string>()
  const [birthdate, setBirthdate] = useState<Date | null>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const infoArray = [name, surname, birthdate, email, password]

  const checkOk = (
    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
  )
  const checkNotOk = (
    <FontAwesomeIcon icon={faCircleXmark} style={{ color: "red" }} />
  )

  const requiredPopover = (
    <Popover id="requeried-popover" className=" bg-danger-subtle">
      <Popover.Body className="text-danger-emphasis">
        <strong>Tutti i campi sono richiesti</strong>
      </Popover.Body>
    </Popover>
  )

  return (
    <Container>
      <Row className="mt-5"></Row>
      <Row className="justify-content-center align-items-center ">
        <Col className="justify-content-center align-items-center d-flex">
          <Card className=" border-2 border-white">
            <Card.Img variant="top" src="https://placehold.co/400x200" />
            <Card.Body className="px-4">
              <Card.Title className="mt-2 mb-3">
                Registrazione utente
              </Card.Title>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    required
                    onChange={(e) => setName(e.target.value)}
                    size="sm"
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Cognome</Form.Label>
                  <Form.Control
                    required
                    onChange={(e) => setSurname(e.target.value)}
                    size="sm"
                    type="text"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>data di nascita</Form.Label>
                  <Form.Control
                    required
                    onChange={(e) =>
                      setBirthdate((e.target as HTMLInputElement).valueAsDate)
                    }
                    size="sm"
                    type="date"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {email &&
                    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(email)
                      ? checkOk
                      : checkNotOk}{" "}
                    Email
                  </Form.Label>
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
                  <div className=" d-flex flex-column mt-4">
                    <Form.Label>
                      {password && password.length >= 12 ? checkOk : checkNotOk}{" "}
                      minimo 12 caratteri
                    </Form.Label>
                    <Form.Label>
                      {password && /[A-Z]/.test(password)
                        ? checkOk
                        : checkNotOk}{" "}
                      minino 1 carattere maiuscolo
                    </Form.Label>
                    <Form.Label>
                      {password && /[a-z]/.test(password)
                        ? checkOk
                        : checkNotOk}{" "}
                      minino 1 carattere minuscolo
                    </Form.Label>
                    <Form.Label>
                      {password && /[0-9]/.test(password)
                        ? checkOk
                        : checkNotOk}{" "}
                      minimo un numero
                    </Form.Label>
                    <Form.Label>
                      {password && /[@$!%*?&]/.test(password)
                        ? checkOk
                        : checkNotOk}{" "}
                      almeno un carattere speciale: @ $ ! % * ? &
                    </Form.Label>
                    <Form.Label>
                      {password && /^[@$!%*?&]+$/.test(password)
                        ? checkNotOk
                        : checkOk}{" "}
                      nessun altro carattere speciale
                    </Form.Label>
                  </div>
                </Form.Group>
                {infoArray.includes(null) ||
                infoArray.includes(undefined) ||
                infoArray.includes("") ||
                !password ||
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/.test(
                  password,
                ) ||
                !email ||
                !/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(
                  email,
                ) ? (
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
                        console.log(`La registrazione ha avuto successo:
                        ${name}
                        ${surname}
                        ${birthdate}
                        ${email}
                        ${password}`)
                      }}
                      variant="buttons"
                      className="rounded-pill fw-semibold text-uppercase py-2 mb-4 mt-3"
                    >
                      registrati
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

export default RegistrationPage
