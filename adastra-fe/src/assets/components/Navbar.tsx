import { Col, Container, Row } from "react-bootstrap"
import type { JSX } from "react/jsx-runtime"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = (): JSX.Element => {
  return (
    <>
      <Container fluid className="bg-black">
        <Row>
          <Col className="ps-0 d-flex justify-content-between align-items-center">
            <img
              src="logo_nav.png"
              alt="logo adastra cinema"
              style={{ maxHeight: "55px" }}
              className=" ms-3"
            />
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#fff" }}
              size="2xl"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Navbar
