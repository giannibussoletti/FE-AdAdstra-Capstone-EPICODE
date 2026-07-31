import { Col, Container, Row } from "react-bootstrap"
import type { JSX } from "react/jsx-runtime"

const Navbar = (): JSX.Element => {
  return (
    <>
      <Container fluid className="bg-black p-0">
        <Container>
          <Row>
            <Col className="ps-0">
              <img
                src="logo_nav.png"
                alt="logo adastra cinema"
                style={{ maxHeight: "55px" }}
              />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Navbar
