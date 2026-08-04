import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch } from "../redux/hooks"
import { setMenu } from "../redux/reducers/NavBarSlice"
import { burgerMenuArray, userMenuArray } from "../misc/arrays"
import CitySearch from "./CitySearch"
import MobileMenu from "./MobileMenu"
const Navbar = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="bg-black">
      <Container fluid="md">
        <Row>
          <Col className="ps-0 d-flex align-items-center">
            <img
              src="logo_nav.png"
              alt="logo adastra cinema"
              style={{ maxHeight: "55px" }}
              className="ms-3 py-2 me-5"
            />
            <div className="me-auto">
              <CitySearch />
            </div>

            <FontAwesomeIcon //USER
              onClick={() =>
                dispatch(
                  setMenu({
                    isOpen: "start-0",
                    arrayMenu: userMenuArray,
                  }),
                )
              }
              icon={faCircleUser}
              style={{ color: "#fff" }}
              size="xl"
              className="mobile-menu-icon me-3"
            />
            <FontAwesomeIcon // BURGER
              onClick={() =>
                dispatch(
                  setMenu({
                    isOpen: "start-0",
                    arrayMenu: burgerMenuArray,
                  }),
                )
              }
              icon={faBars}
              style={{ color: "#fff" }}
              size="xl"
              className="mobile-menu-icon"
            />
          </Col>
        </Row>
        <MobileMenu />
      </Container>
    </div>
  )
}

export default Navbar
