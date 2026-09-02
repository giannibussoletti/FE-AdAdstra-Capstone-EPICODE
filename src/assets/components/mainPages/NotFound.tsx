import { Container, Row, Col, Button } from "react-bootstrap"
import { useNavigate } from "react-router"
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Container className="my-5 py-5">
      <Row className=" justify-content-center align-content-center">
        <Col className="text-center">
          <h2 className="mb-3" style={{ fontSize: "5rem" }}>
            Error 404
          </h2>
          <h3 className="mb-5">page not found</h3>
          <Button
            variant="buttons"
            className="rounded-pill fw-semibold text-uppercase py-2"
            onClick={() => navigate("/")}
          >
            <span className="mx-3">Homepage</span>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
