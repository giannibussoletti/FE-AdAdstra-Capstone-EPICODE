import TicketsCount from "../TicketsCount"
import TopBarInfoBooking from "../TopBarInfoBooking"
import MainTitles from "../MainTitles"
import Buttons from "../Buttons"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  Form,
  Container,
  Row,
  Col,
  Popover,
  OverlayTrigger,
  Modal,
  Button,
} from "react-bootstrap"
import { resetState } from "../../redux/reducers/TicketSlice"
import ResponseModal from "../ResponseModal"
import { fetchBooking } from "../../fetchs"
import { useRef, useState } from "react"
import { blueCost, GREEN, greenCost, RED, redCost } from "../../misc/variables"
import {
  faCircle,
  faCircleCheck,
  faCircleXmark,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PaymentPage = () => {
  const requiredPopover = (
    <Popover id="requeried-popover" className=" bg-danger-subtle">
      <Popover.Body className="text-danger-emphasis text-center">
        <strong>
          la mail obbligatoria <br />
          per l'invio dei biglietti
        </strong>
      </Popover.Body>
    </Popover>
  )

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
    icon: faCircle,
    style: "",
    buttonText: "",
  })
  const [showAlert, setShowAlert] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const screenTimeId = useAppSelector(
    (state) => state.movieState.screeningTimeId,
  )
  const maxSeats = useAppSelector((state) => state.bookingState.maxSeats)
  const totalCost = useAppSelector((state) => state.bookingState.totalCost)

  const greenSeatsPosition = useAppSelector(
    (state) => state.bookingState.greenSeatsPosition,
  )
  const redSeatsPosition = useAppSelector(
    (state) => state.bookingState.redSeatsPosition,
  )
  const blueSeatsPosition = useAppSelector(
    (state) => state.bookingState.blueSeatsPosition,
  )

  const totalRed = redSeatsPosition.length * redCost
  const totalBlue = blueSeatsPosition.length * blueCost
  const totalGreen = greenSeatsPosition.length * greenCost

  const [guestEmail, setEmail] = useState("")
  const [coupon, setCoupon] = useState("")

  const dispatch = useAppDispatch()
  const target = useRef(null)

  return (
    <>
      <ResponseModal
        message={modalData.message}
        title={modalData.title}
        show={show}
        handleClose={handleClose}
        icon={modalData.icon}
        style={modalData.style}
        buttonText={modalData.buttonText}
      />
      <TopBarInfoBooking />
      <Container className="mt-4 px-5 px-md-0">
        <Row xs={1} className="text-center">
          <Col>
            <MainTitles string="i tuoi biglietti" />
          </Col>

          <Col className="mt-3">
            <TicketsCount
              redSeatsPosition={redSeatsPosition}
              greenSeatsPosition={greenSeatsPosition}
              blueSeatsPosition={blueSeatsPosition}
              totalCost={totalCost}
              totalRed={totalRed}
              totalBlue={totalBlue}
              totalGreen={totalGreen}
            />
          </Col>
        </Row>
        <Row xs={1} md={2} className="mb-3 p-0 mt-3 mt-md-0">
          <Col>
            <h5 className="f fw-normal text-uppercase mt-3 mb-2">
              <Form.Label className="mb-0">inserisci la tua mail*</Form.Label>
            </h5>
            <Form.Control
              ref={target}
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>

          <Col>
            <h5 className="f fw-normal text-uppercase mt-3 mb-2">
              <Form.Label className="mb-0">inserisci coupon</Form.Label>
            </h5>
            <Form.Control onChange={(e) => setCoupon(e.target.value)} />
          </Col>
        </Row>

        <Row xs={1} className="mt-5">
          <Col className="d-flex justify-content-between">
            <h2>totale</h2>
            <h2>{totalCost.toFixed(2)} €</h2>
          </Col>

          <OverlayTrigger
            show={showAlert}
            delay={{ show: 100, hide: 400 }}
            placement="top"
            overlay={requiredPopover}
          >
            <Col className="text-center mt-4">
              <Button
                onClick={() => {
                  if (guestEmail) {
                    setShowConfirmation(true)
                  } else {
                    setShowAlert(true)
                  }
                }}
                variant="buttons"
                className="rounded-pill fw-semibold text-uppercase py-2"
              >
                <span className="mx-3">Acquista</span>
              </Button>
            </Col>
          </OverlayTrigger>
        </Row>
      </Container>

      {/*  */}
      {/*  */}
      {/*  */}
      <Modal show={showConfirmation} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title as={"h5"}>Richiesta di conferma</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>L'email inserita è corretta?</p>
          <strong>{guestEmail}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              setShowConfirmation(false)
              fetchBooking(
                screenTimeId,
                maxSeats,
                totalCost,
                guestEmail,
                coupon,
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
                  dispatch(resetState())
                })
                .catch((err) => {
                  setModalData({
                    title: "Ops!",
                    message: "Acquisto non riuscito " + err,
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
          <Button
            variant="danger"
            onClick={() => {
              setShowConfirmation(false)
            }}
          >
            C'è un errore
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PaymentPage
