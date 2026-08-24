import { Dropdown, Row, Col } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setCinemaState, setId } from "../redux/reducers/NavBarSlice"
import { fetchCinemas } from "../fetchs"
import { useEffect, useState } from "react"
import type { CinemaFetchType } from "../fetchs/fetchTypes"

const CitySearch = () => {
  const dispatch = useAppDispatch()
  const selectCinema = useAppSelector(
    (state) => state.menuState.cinemaSearchMenu,
  )
  const [cinema, setCinema] = useState<CinemaFetchType[]>([])

  useEffect(() => {
    fetchCinemas()
      .then((data) => {
        setCinema(data)
      })
      .catch((error) => console.error(error))
  }, [selectCinema])

  if (!cinema) {
    return <p>Caricamento in corso</p>
  }

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
                  setCinemaState({
                    isOpen: "start-0",
                    arrayCinema: cinema,
                    isCinema: true,
                    cinemaSearchMenu: selectCinema,
                  }),
                )
              }}
              id="dropdown-basic"
              className="w-100 d-flex justify-content-between align-items-center px-3 rounded-0 bg-transparent border-1 border-white "
            >
              {selectCinema}
            </Dropdown.Toggle>
          </Dropdown>
          {/* Tablet / Desktop version */}
          <Dropdown className="w-100 d-none d-lg-block">
            <Dropdown.Toggle
              id="dropdown-basic"
              className="w-100 d-flex justify-content-between align-items-center px-3 rounded-0 bg-transparent border-1 border-white"
            >
              {selectCinema}
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ maxHeight: "270px" }}
              className="w-100 bg-black overflow-scroll"
            >
              {cinema.map((cin) => {
                return (
                  <Dropdown.Item
                    key={cin.id + cin.cinemaName}
                    className="text-light"
                    onClick={() => {
                      dispatch(
                        setCinemaState({
                          isOpen: "start-100",
                          arrayCinema: [],
                          isCinema: false,
                          cinemaSearchMenu: cin.cinemaName,
                        }),
                      )
                      dispatch(setId(cin.id))
                    }}
                  >
                    {cin.cinemaName}
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
