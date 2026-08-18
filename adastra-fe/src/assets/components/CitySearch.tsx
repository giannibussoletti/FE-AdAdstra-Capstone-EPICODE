import { Dropdown, Row, Col } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setCity } from "../redux/reducers/NavBarSlice"
import { fetchCities } from "../misc/fetchs"
import { useEffect, useState } from "react"
import type { CitiesFetchType } from "../misc/types"

const CitySearch = () => {
  const dispatch = useAppDispatch()
  const city = useAppSelector((state) => state.menuState.citySearchMenu)
  const [cities, SetCities] = useState<CitiesFetchType[]>([])

  useEffect(() => {
    fetchCities()
      .then((data) => {
        SetCities(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <Row className="align-items-center" style={{ minWidth: "200px" }}>
        <Col>
          {/* Mobile version */}
          <Dropdown className="w-100  d-lg-none">
            <Dropdown.Toggle
              onClick={(e) => {
                e.preventDefault()
                dispatch(
                  setCity({
                    isOpen: "start-0",
                    arrayCity: cities,
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
          <Dropdown className="w-100 d-none d-lg-block">
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
              {cities.map((prv) => {
                return (
                  <Dropdown.Item
                    className="text-light"
                    onClick={() => {
                      dispatch(
                        setCity({
                          isOpen: "start-100",
                          arrayCity: [],
                          isCities: false,
                          citySearchMenu: prv.city,
                        }),
                      )
                    }}
                  >
                    {prv.city}
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
