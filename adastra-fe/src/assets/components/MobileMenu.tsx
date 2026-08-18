import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setCity, setMenu, setId } from "../redux/reducers/NavBarSlice"
import { faCircle } from "@fortawesome/free-solid-svg-icons"

const MobileMenu = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector

  const closeUpdate = selector((state) => state.menuState.isOpen)
  const arrayMenu = selector((state) => state.menuState.arrayMenu)
  const isCitiesMenu = selector((state) => state.menuState.isCities)
  const arrayProvince = selector((state) => state.menuState.arrayCity)

  if (!isCitiesMenu) {
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
                setMenu({
                  isOpen: "start-100",
                  arrayMenu: [],
                  isCities: false,
                }),
              )
            }
            className="cursor-pointer"
          >
            &#120;
          </span>
        </Col>
        <Col className="m-0 mb-5 pb-5 px-5 mx-5">
          {arrayMenu.map((menuItem) => {
            return (
              <div
                key={menuItem.label + menuItem.URL}
                className="text-uppercase fw-medium mb-4 cursor-pointer"
                onClick={() => (window.location.href = menuItem.URL)}
              >
                <FontAwesomeIcon icon={menuItem.icon} className="me-3" />
                {menuItem.label}
              </div>
            )
          })}
        </Col>
      </Row>
    )
  } else {
    return (
      <Row
        className={
          "mobile-menu p-0 m-0 h-100 w-100 bg-black position-fixed top-0 bottom-100 end-100 z-3" +
          " " +
          closeUpdate
        }
      >
        <Row className="d-flex flex-column justify-content-start align-items-center">
          <div
            onClick={() =>
              dispatch(
                setMenu({
                  isOpen: "start-100",
                  arrayMenu: [],
                  isCities: false,
                }),
              )
            }
            className="cursor-pointer d-flex justify-content-end pt-4 pe-5 fw-semibold fs-3"
          >
            &#120;
          </div>
          <Col
            xs={12}
            className="d-flex justify-content-end pt-4 pe-5 fw-semibold fs-3"
          ></Col>
          {arrayProvince.map((prv) => {
            return (
              <Col
                key={prv.id}
                className="cursor-pointer"
                xs={12}
                onClick={() => {
                  dispatch(
                    setCity({
                      isOpen: "start-100",
                      citySearchMenu: prv.city,
                      isCities: true,
                      arrayCity: [],
                    }),
                    dispatch(setId(prv.id)),
                  )
                }}
              >
                <FontAwesomeIcon icon={faCircle} size="2xs" className="me-3" />
                {prv.city}
                <hr />
              </Col>
            )
          })}
        </Row>
      </Row>
    )
  }
}
export default MobileMenu
