import { Dropdown, Container, Row, Col, Button } from "react-bootstrap"
import { province, randomNum } from "../temp"
import { useState } from "react"

const CitySearch = () => {
  const [city, setCity] = useState("Roma")

  return (
    <Container>
      <Row>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {city}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {province.map((prv) => {
                return (
                  <Dropdown.Item
                    onClick={() => setCity(prv)}
                    key={prv + randomNum}
                  >
                    {prv}
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Button variant="primary">Primary</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CitySearch
