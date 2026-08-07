import TheaterMap from "../TheaterMap"
import MainTitles from "../MainTitles"
import Buttons from "../Buttons"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Col, Row, Form, Button } from "react-bootstrap"
const SeatsChoice = () => {
  return (
    <>
      <Container fluid>
        <Row xs={1}>
          <Col className="p-0">
            <h1 className="m-0 py-4 text-uppercase w-100 text-center bg-text-field">
              spiderman: brand new day
            </h1>
          </Col>
          <Row className="bg-black m-0 py-3 px-5">
            <Col>
              <p className="mb-1 text-uppercase fw-semibold">sala 9</p>
              <p className="mb-1 text-uppercase fw-semibold">30/07/2026</p>
              <p className="mb-1 text-uppercase fw-semibold">19:30</p>
            </Col>
            <Col className="align-self-center text-end">
              <Button className="bg-buttons border-0 text-uppercase">
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ color: "rgb(255, 255, 255)" }}
                />{" "}
                modifica
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container fluid="lg" className="px-0 px-lg-3">
        <Row xs={1} lg={2}>
          <Col className="p-0 px-lg-3">
            <TheaterMap />
          </Col>
          <Col className="px-1 px-lg-5  mt-5">
            <Col className="text-center pb-4">
              <MainTitles string="totale biglietti" />
            </Col>
            <Row className="text-uppercase fw-medium align-items-center px-5 pb-4">
              <Col className="d-flex align-items-center">
                <span className="seat-total seat-red" />
                Rosso
              </Col>
              <Col className="text-end">0.00€</Col>
            </Row>
            <Row className="text-uppercase fw-medium align-items-center px-5 pb-4">
              <Col className="d-flex align-items-center">
                <span className="seat-total seat-blue" />
                Blu
              </Col>
              <Col className="text-end">0.00€</Col>
            </Row>
            <Row className="text-uppercase fw-medium align-items-center px-5 pb-4">
              <Col className="d-flex align-items-center">
                <span className="seat-total seat-green" />
                Verde
              </Col>
              <Col className="text-end">0.00€</Col>
            </Row>
            <Row className="px-5">
              <Col>
                <h5 className="f fw-normal text-uppercase mt-3 mb-2">
                  <Form.Label className="mb-0">inserisci coupon</Form.Label>
                </h5>
                <Form.Control />
                <div className="d-flex justify-content-between mb-3 mt-5 p-0">
                  <h2>totale</h2>
                  <h2>0.00€</h2>
                </div>
                <div className="text-center">
                  <Buttons string="verifica ed acquista" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SeatsChoice
