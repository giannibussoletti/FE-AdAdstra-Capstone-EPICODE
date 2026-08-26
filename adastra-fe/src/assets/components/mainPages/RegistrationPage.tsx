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
import {
  faCircle,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"
import { fetchRegistration } from "../../fetchs"

import PasswordCheck from "../PasswordCheck"
import RegistrationModal from "../RegistrationModal"
import { GREEN, RED } from "../../misc/variables"

const RegistrationPage = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const [name, setName] = useState<string>("")
  const [surname, setSurname] = useState<string>("")
  const [birthDate, setBirthDate] = useState<Date>(new Date())
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
    icon: faCircle,
    style: "",
    buttonText: "",
  })

  const infoArray = [name, surname, birthDate, email, password]

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
      <RegistrationModal
        message={modalData.message}
        title={modalData.title}
        show={show}
        handleClose={handleClose}
        icon={modalData.icon}
        style={modalData.style}
        buttonText={modalData.buttonText}
      />
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
                      setBirthDate((e.target as HTMLInputElement).valueAsDate!)
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
                  <PasswordCheck checking={password} />
                </Form.Group>
                {infoArray.includes("") ||
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
                        fetchRegistration(
                          name,
                          surname,
                          birthDate,
                          email,
                          password,
                        )
                          .then((data) => {
                            setModalData({
                              title: "Tutto ok!",
                              message: data.message,
                              icon: faCircleCheck,
                              style: GREEN,
                              buttonText: "Vai alla homepage",
                            })
                            setShow(true)
                          })

                          .catch((err) => {
                            setModalData({
                              title: "Ops!",
                              message:
                                "Qualcosa è andato storto, riprova " + err,
                              icon: faCircleCheck,
                              style: RED,
                              buttonText: "Riprova",
                            })
                            setShow(true)
                          })
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
