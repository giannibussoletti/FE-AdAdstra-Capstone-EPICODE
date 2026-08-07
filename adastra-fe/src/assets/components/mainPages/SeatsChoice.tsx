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
      <Row xs={1} lg={2} className="m-0 p-0">
        <Col>
          <TheaterMap />
        </Col>
        <Col className="mt-5 mt-lg-0">
          <div className="text-center pb-4">
            <MainTitles string="totale biglietti" />
          </div>
          <Table borderless className="text-uppercase fw-medium">
            <tbody>
              <tr>
                <td className="d-flex align-items-center p-0 pb-4">
                  <span className="seat-total seat-red" />
                  Rosso
                </td>
                <td className="text-end p-0 pb-4">0.00€</td>
              </tr>
              <tr>
                <td className="d-flex align-items-center p-0 pb-4">
                  <span className="seat-total seat-green" />
                  Verde
                </td>
                <td className="text-end p-0 pb-4">0.00€</td>
              </tr>
              <tr>
                <td className="d-flex align-items-center p-0 pb-4">
                  <span className="seat-total seat-blue" />
                  Blu
                </td>
                <td className="text-end p-0">0.00€</td>
              </tr>
            </tbody>
          </Table>
          <h4 className="f fw-normal text-uppercase mt-3 mb-0">
            <Form.Label className="mb-0">inserisci coupon</Form.Label>
          </h4>

          <Form.Control />
          <div className="d-flex justify-content-between mb-3 mt-5 p-0">
            <h2>totale</h2>
            <h2>0.00€</h2>
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
