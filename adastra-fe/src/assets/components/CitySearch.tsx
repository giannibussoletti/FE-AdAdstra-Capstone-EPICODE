import { Dropdown, Row, Col } from "react-bootstrap"
import { province, randomNum } from "../temp"
import { useState } from "react"

const CitySearch = () => {
  const [city, setCity] = useState("Roma")

  return (
    <>
      <Row className="align-items-center">
        <Col xs={12} xxl={2}>
          <p className="text-uppercase mb-0 fw-medium">
            seleziona la tua città
          </p>
        </Col>
        <Col xs={12} xxl={10}>
          <Dropdown className="w-100">
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="w-100 d-flex justify-content-between align-items-center px-3 rounded-0 bg-text-field border-1 border-white"
            >
              {city}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100 rounded-0 bg-text-field border-1 border-white">
              {province.map((prv) => {
                return (
                  <Dropdown.Item
                    onClick={() => setCity(prv)}
                    key={prv + randomNum}
                    className="text-white dropdown-item"
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
