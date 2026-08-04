import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
const pMenuClass = "text-uppercase fw-medium"
const Navbar = () => {
  const [close, setClose] = useState("start-100")

  return (
    <div className="bg-black">
      <Container fluid="md">
        <Row>
          <Col className="ps-0 d-flex justify-content-between align-items-center">
            <img
              src="logo_nav.png"
              alt="logo adastra cinema"
              style={{ maxHeight: "55px" }}
              className="ms-3 py-2"
            />
            <FontAwesomeIcon
              onClick={() => setClose("start-0")}
              icon={faBars}
              style={{ color: "#fff" }}
              size="xl"
              // className="mobile-menu-icon"
            />
          </Col>
        </Row>
        <div>
          <Row
            className={
              "mobile-menu p-0 m-0 h-100 w-100 bg-black position-fixed top-0 bottom-100 end-100 z-3" +
              close
            }
          >
            <Col
              xs={12}
              className="d-flex justify-content-end pt-4 pe-5 fw-semibold fs-3"
            >
              <span
                className="mobile-menu-icon"
                onClick={() => setClose("start-100")}
              >
                &#120;
              </span>
            </Col>
            <Col className="m-0 mb-5 pb-5 px-5 mx-5">
              <span className={pMenuClass}>
                <FontAwesomeIcon icon={faCircle} /> item 1
              </span>
              <hr />
              <span className={pMenuClass}>
                <FontAwesomeIcon icon={faCircle} /> item 2
              </span>
              <hr />
              <span className={pMenuClass}>
                <FontAwesomeIcon icon={faCircle} /> item 3
              </span>
              <hr />
              <span className={pMenuClass}>
                <FontAwesomeIcon icon={faCircle} /> item 4
              </span>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
