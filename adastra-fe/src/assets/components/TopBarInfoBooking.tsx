import { Row, Button, Col, Container } from "react-bootstrap"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const TopBarInfoBooking = () => {
  return (
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
  )
}
export default TopBarInfoBooking
