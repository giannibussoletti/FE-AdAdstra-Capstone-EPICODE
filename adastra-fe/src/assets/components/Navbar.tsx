import { Col, Container, Row, Dropdown, DropdownButton } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch } from "../redux/hooks"
import { setMenu } from "../redux/reducers/NavBarSlice"
import { burgerMenuArray, userMenuArray } from "../misc/arrays"
import CitySearch from "./CitySearch"
import MobileMenu from "./MobileMenu"
import { useLocation } from "react-router"
import { useNavigate } from "react-router"

const Navbar = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const marginLogo = location.pathname !== "/" ? "me-auto" : ""
  const navigate = useNavigate()
  return (
    <div className="bg-black">
      <Container fluid="md">
        <Row>
          <Col className="ps-0 d-flex align-items-center">
            <img
              className={"ms-3 py-1 me-3 cursor-pointer" + " " + marginLogo}
              onClick={() => navigate("/")}
              src="/logo_nav.png"
              alt="logo adastra cinema"
              style={{ maxHeight: "55px" }}
            />
            {location.pathname !== "/" ? (
              ""
            ) : (
              <div className="me-auto me-lg-5">
                <CitySearch />
              </div>
            )}
            <div className="d-lg-none">
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
                className="me-3 cursor-pointer"
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
                className="cursor-pointer"
              />
            </div>
            <div className="w-100 d-none d-lg-block">
              <ul className=" justify-content-around navbar-list p-0 m-0 d-flex  align-items-center">
                {burgerMenuArray.map((item) => {
                  return (
                    <li key={item.label + item.label}>
                      <a
                        className="text-uppercase fw-medium cursor-pointer"
                        href={item.imgLink}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="d-lg-inline-block d-none">
              <DropdownButton
                onClick={() =>
                  dispatch(
                    setMenu({
                      isOpen: "start-100",
                      arrayMenu: userMenuArray,
                      isCities: false,
                    }),
                  )
                }
                bsPrefix="btn-utente"
                title={
                  <FontAwesomeIcon //USER
                    icon={faCircleUser}
                    style={{ color: "#fff" }}
                    size="xl"
                    className="cursor-pointer"
                  />
                }
                align="end"
              >
                {userMenuArray.map((item) => {
                  return (
                    <Dropdown.Item href={item.URL}>{item.label}</Dropdown.Item>
                  )
                })}
              </DropdownButton>
            </div>
          </Col>
        </Row>
        <MobileMenu />
      </Container>
    </div>
  )
}

export default Navbar
