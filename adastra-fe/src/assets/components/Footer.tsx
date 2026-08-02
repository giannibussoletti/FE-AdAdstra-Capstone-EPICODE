import { Container, Accordion, Row, Col } from "react-bootstrap"
import { footerInfo } from "../misc/arrays"
const Footer = () => {
  return (
    <div className="bg-black">
      <Container fluid="md">
        <Row xs={1} md={2}>
          <Col className="p-0">
            <Accordion className="" flush alwaysOpen>
              {footerInfo.map((info, i) => {
                return (
                  <Accordion.Item className="p-0 " eventKey={i.toString()}>
                    <Accordion.Header>
                      <h5 className="fw-normal text-uppercase mt-3">
                        {info.title}
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>{info.text}</Accordion.Body>
                  </Accordion.Item>
                )
              })}
            </Accordion>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
