import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch } from "../redux/hooks"
import { setMenu } from "../redux/reducers/NavBarSlice"
import { burgerMenuArray, userMenuArray } from "../misc/arrays"
import CitySearch from "./CitySearch"
import MobileMenu from "./MobileMenu"
import { useLocation, Link } from "react-router"
import { useEffect, useState } from "react"

const Navbar = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const marginLogo = location.pathname !== "/" ? "me-auto" : ""
  const [tabWidth, setTabWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setTabWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const citySeachCond = () => {
    if (tabWidth >= 992) return ""
    else {
      return
    }
  }

  return (
    <div className="bg-black">
      <Container fluid="md">
        <Row>
          <Col className="ps-0 d-flex align-items-center">
            <Link to={"/"} className={"ms-3 py-1  me-5" + " " + marginLogo}>
              <img
                src="/logo_nav.png"
                alt="logo adastra cinema"
                style={{ maxHeight: "55px" }}
              />
            </Link>
            {location.pathname !== "/" ? (
              ""
            ) : (
              <div className="me-auto">
                <CitySearch />
              </div>
            )}

            <FontAwesomeIcon //USER
              onClick={() =>
                dispatch(
                  setMenu({
                    isOpen: "start-0",
                    arrayMenu: userMenuArray,
                    isCities: false,
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
                    isCities: false,
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
