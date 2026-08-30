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
  Modal,
} from "react-bootstrap"
import { fetchUpdatePsw, fetchUserMovies } from "../../fetchs"
import type { UserMovies } from "../../fetchs/fetchTypes"
import { useNavigate } from "react-router"
import ResponseModal from "../ResponseModal"
import {
  faCircle,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons"
import { BLUE, RED } from "../../misc/variables"
import PasswordCheck from "../PasswordCheck"
const ProfileDetails = () => {
  const navigate = useNavigate()
  const name = useAppSelector((state) => state.userState.name)
  const surname = useAppSelector((state) => state.userState.surname)
  const email = useAppSelector((state) => state.userState.email)
  const profilePicLink = useAppSelector(
    (state) => state.userState.profilePicLink,
  )
  const birthDate = useAppSelector((state) => state.userState.birthDate)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
    icon: faCircle,
    style: "",
    buttonText: "",
  })

  const [userMovies, setUserMovies] = useState<UserMovies[]>([])
  const [formIsDisabled, setFormIsDisabled] = useState(true)
  const [oldPsw, setOldPsw] = useState<string>("")
  const [newPsw, setNewPsw] = useState<string>("")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [newMail, setNewMail] = useState<string>("")
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    fetchUserMovies()
      .then((data) => setUserMovies(data))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {}, [])

  return (
    <Container className="justify-content-center align-items-center d-flex pt-5">
      <ResponseModal
        message={modalData.message}
        title={modalData.title}
        show={show}
        handleClose={handleClose}
        icon={modalData.icon}
        style={modalData.style}
        buttonText={modalData.buttonText}
      />
      <Row xs={1} lg={2}>
        <Col>
          <Row xs={1} className="justify-content-center align-items-center">
            <Col className="text-center">
              <Image
                className="border border-5"
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
                    onChange={(e) => setNewMail(e.target.value)}
                    style={{ width: "auto" }}
                    size="sm"
                    disabled={formIsDisabled}
                    plaintext={formIsDisabled}
                    defaultValue={email}
                    className="text-light"
                  />
                  {formIsDisabled ? (
                    <Button
                      onClick={() => setFormIsDisabled(!formIsDisabled)}
                      size="sm"
                      variant="buttons"
                      className="rounded-pill fw-semibold text-uppercase py-2 ms-auto"
                    >
                      <span className="mx-2">Modifica</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setFormIsDisabled(!formIsDisabled)}
                      size="sm"
                      variant="buttons"
                      className="rounded-pill fw-semibold text-uppercase py-2 ms-auto"
                    >
                      <span className="mx-2">Aggiorna</span>
                    </Button>
                  )}
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className="mb-0">Password:</Form.Label>
                <Row xs={2}>
                  <Col>
                    <Form.Control
                      onChange={(e) => setOldPsw(e.target.value)}
                      style={{ width: "auto" }}
                      size="sm"
                      type="password"
                      className="text-light mb-3"
                      placeholder="Vecchia password"
                    />
                    <Form.Control
                      className="text-light"
                      onChange={(e) => setNewPsw(e.target.value)}
                      style={{ width: "auto" }}
                      size="sm"
                      type="password"
                      placeholder="Nuova password"
                    />
                  </Col>

                  <Col className="text-end">
                    <Button
                      onClick={() => setShowConfirmation(true)}
                      size="sm"
                      variant="buttons"
                      className="rounded-pill fw-semibold text-uppercase py-2"
                    >
                      <span className="mx-2">Aggiorna</span>
                    </Button>
                  </Col>
                </Row>
                {newPsw && <PasswordCheck checking={newPsw} />}
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
                    onClick={() => navigate("/dettagli/" + movie.movieId)}
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
      {/* */}
      {/* */}
      {/* */}
      <Modal
        show={showConfirmation}
        onHide={() => setShowConfirmation(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title as={"h5"}></Modal.Title>
        </Modal.Header>
        <Modal.Body>Confermi di voler cambiare la password?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="buttons"
            onClick={() => {
              setShowConfirmation(false)
              fetchUpdatePsw(oldPsw, newPsw)
                .then((data) => {
                  setModalData({
                    title: "Tutto ok!",
                    message: data.message,
                    icon: faCircleCheck,
                    style: BLUE,
                    buttonText: "torna ai dettagli",
                  })
                  setShow(true)
                })
                .catch(() => {
                  setModalData({
                    title: "Ops!",
                    message: "C'è stato un errore nell'aggiornamento",
                    icon: faCircleXmark,
                    style: RED,
                    buttonText: "Riprova",
                  })
                  setShow(true)
                })
            }}
          >
            Confermo
          </Button>
          <Button variant="buttons" onClick={() => setShowConfirmation(false)}>
            Ci ho ripensato
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default ProfileDetails
