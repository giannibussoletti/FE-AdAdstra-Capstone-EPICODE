import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setBurger } from "../redux/reducers/mobileMenuSlice"

const pMenuClass = "text-uppercase fw-medium mb-4"
const MobileMenu = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector

  const closeUpdate = selector((state) => state.menuState.burgerMenu)
  const arrayMenu = selector((state) => state.menuState.arrayMenu)

  return (
    <Row
      className={
        "mobile-menu p-0 m-0 h-100 w-100 bg-black position-fixed top-0 bottom-100 end-100 z-3" +
        " " +
        closeUpdate
      }
    >
      <Col
        xs={12}
        className="d-flex justify-content-end pt-4 pe-5 fw-semibold fs-3"
      >
        <span
          onClick={() =>
            dispatch(
              setBurger({
                burgerMenu: "start-100",
                arrayMenu: [],
              }),
            )
          }
          className="mobile-menu-icon"
        >
          &#120;
        </span>
      </Col>
      <Col className="m-0 mb-5 pb-5 px-5 mx-5">
        {arrayMenu.map((menuItem) => {
          return (
            <div
              className={pMenuClass}
              onClick={() => (window.location.href = menuItem.link)}
            >
              <FontAwesomeIcon icon={menuItem.icon} className="me-3" />
              {menuItem.name}
            </div>
          )
        })}
      </Col>
    </Row>
  )
}
export default MobileMenu
