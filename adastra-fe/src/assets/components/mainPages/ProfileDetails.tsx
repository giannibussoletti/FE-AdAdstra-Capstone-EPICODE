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
import { useNavigate } from "react-router"
import ResponseModal from "../ResponseModal"
import UpdateProfileResponseModal from "../UpdateProfileResponseModal"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import PasswordCheck from "../PasswordCheck"
import { MAIL, PASSWORD } from "../../misc/variables"
import UploadPicModal from "../UploadPicModal"

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
  const [modalPicShow, setModalPicShow] = useState(false)
  const handleCloseModalPic = () => setModalPicShow(false)

  const [userMovies, setUserMovies] = useState<UserMovies[]>([])
  const [oldPsw, setOldPsw] = useState<string>("")
  const [newPsw, setNewPsw] = useState<string>("")
  const [newMail, setNewMail] = useState<string>("")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [mailOrPsw, setMailOrPsw] = useState("")
  const handleCloseShowConfirmation = () => setShowConfirmation(false)

  useEffect(() => {
    fetchUserMovies()
      .then((data) => setUserMovies(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <Container className="justify-content-center align-items-center d-flex pt-5">
      <Row xs={1} lg={2}>
        <Col>
          <Row xs={1} className="justify-content-center align-items-center">
            <Col className="text-center">
              <div
                className="image-container border border-5 rounded-circle cursor-pointer"
                onClick={() => setModalPicShow(true)}
              >
                <Image
                  className="pic-dimension"
                  roundedCircle
                  src={profilePicLink}
                />
                <span className="image-text">Modifica</span>
              </div>
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
                    type="email"
                    defaultValue={email}
                    className="text-light"
                  />

                  <Button
                    onClick={() => {
                      setShowConfirmation(true)
                      setMailOrPsw(MAIL)
                    }}
                    size="sm"
                    variant="buttons"
                    className="rounded-pill fw-semibold text-uppercase py-2 ms-auto"
                  >
                    <span className="mx-2">Aggiorna</span>
                  </Button>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
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
                      onClick={() => {
                        setShowConfirmation(true)
                        setMailOrPsw(PASSWORD)
                      }}
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
                    key={movie.movieId}
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

      {/* Modal*/}
      <UpdateProfileResponseModal
        newMail={newMail}
        showConfirmation={showConfirmation}
        handleCloseShowConfirmation={handleCloseShowConfirmation}
        mailOrPsw={mailOrPsw}
        oldPsw={oldPsw}
        newPsw={newPsw}
        setModalData={setModalData}
        setShow={setShow}
      />
      <ResponseModal
        message={modalData.message}
        title={modalData.title}
        show={show}
        handleClose={handleClose}
        icon={modalData.icon}
        style={modalData.style}
        buttonText={modalData.buttonText}
      />
      <UploadPicModal
        modalPicShow={modalPicShow}
        handleCloseModalPic={handleCloseModalPic}
      />
    </Container>
  )
}

export default ProfileDetails
