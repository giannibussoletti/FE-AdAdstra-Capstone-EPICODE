import TheaterMap from "../TheaterMap"
import MainTitles from "../MainTitles"
import Buttons from "../Buttons"
import { Container, Col, Row, Table, Form } from "react-bootstrap"
const SeatsChoice = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
      <Row xs={1} className="m-0 p-0">
        <Col>
          <TheaterMap />
        </Col>
        <Col className="mt-5">
          <div className="text-center">
            <MainTitles string="totale biglietti" />
          </div>
          <Table>
            <tbody>
              <tr>
                <td>Rosso</td>
                <td className="text-end">0.00€</td>
              </tr>
              <tr>
                <td>Verde</td>
                <td className="text-end">0.00€</td>
              </tr>
              <tr>
                <td>Blu</td>
                <td className="text-end">0.00€</td>
              </tr>
            </tbody>
          </Table>
          <h4 className="f fw-normal text-uppercase mt-3 mb-0">
            <Form.Label className="mb-0">inserisci coupon</Form.Label>
          </h4>

          <Form.Control />
          <div className="d-flex justify-content-between">
            <h2 className="mb-4 p-0">totale</h2>
            <h2 className="mb-4 p-0">0.00€</h2>
          </div>
          <div className="text-center">
            <Buttons string="verifica ed acquista" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SeatsChoice
