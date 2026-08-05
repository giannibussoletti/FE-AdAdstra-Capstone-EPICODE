import { Dropdown, Row, Col } from "react-bootstrap"
import { province } from "../temp"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setCity } from "../redux/reducers/NavBarSlice"
const CitySearch = () => {
  const dispatch = useAppDispatch()
  const city = useAppSelector((state) => state.menuState.citySearchMenu)

  return (
    <>
      <Row className="align-items-center" style={{ minWidth: "300px" }}>
        <Col>
          {/* Mobile version */}
          <Dropdown className="w-100  d-md-none">
            <Dropdown.Toggle
              onClick={(e) => {
                e.preventDefault()
                dispatch(
                  setCity({
                    isOpen: "start-0",
                    arrayCity: province,
                    isCities: true,
                    citySearchMenu: city,
                  }),
                )
              }}
              id="dropdown-basic"
              className="w-100 d-flex justify-content-between align-items-center px-3 rounded-0 bg-transparent border-1 border-white "
            >
              {city}
            </Dropdown.Toggle>
          </Dropdown>
          {/* Tablet / Desktop version */}
          <Dropdown className="w-100 d-none d-md-block">
            <Dropdown.Toggle
              id="dropdown-basic"
              className="w-100 d-flex justify-content-between align-items-center px-3 rounded-0 bg-transparent border-1 border-white"
            >
              {city}
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ maxHeight: "270px" }}
              className="w-100 bg-black overflow-scroll"
            >
              {province.map((prv) => {
                return (
                  <Dropdown.Item
                    className="text-light"
                    onClick={() => {
                      dispatch(
                        setCity({
                          isOpen: "start-100",
                          arrayCity: [],
                          isCities: false,
                          citySearchMenu: prv,
                        }),
                      )
                    }}
                  >
                    {prv}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </>
  )
}

export default CitySearch
