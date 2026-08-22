import { Container, Form, Row, Col, Card } from "react-bootstrap"
import Buttons from "../Buttons"
const RegistrationPage = () => {
  return (
    <Container>
      <Row className="mt-5"></Row>
      <Row className="justify-content-center align-items-center ">
        <Col className="justify-content-center align-items-center d-flex">
          <Card className=" border-2 border-white">
            <Card.Img variant="top" src="https://placehold.co/400x200" />
            <Card.Body>
              <Card.Title>Registrazione utente</Card.Title>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-1" style={{ fontSize: ".9rem" }}>
                    Nome
                  </Form.Label>
                  <Form.Control size="sm" type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-1" style={{ fontSize: ".9rem" }}>
                    Cognome
                  </Form.Label>
                  <Form.Control size="sm" type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-1" style={{ fontSize: ".9rem" }}>
                    data di nascita
                  </Form.Label>
                  <Form.Control size="sm" type="date" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-1" style={{ fontSize: ".9rem" }}>
                    Email
                  </Form.Label>
                  <Form.Control size="sm" type="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-1" style={{ fontSize: ".9rem" }}>
                    password
                  </Form.Label>
                  <Form.Control size="sm" type="password" />
                </Form.Group>
                <Col className="text-center pt-2 mb-3">
                  <Buttons string="Registrati" />
                </Col>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RegistrationPage
