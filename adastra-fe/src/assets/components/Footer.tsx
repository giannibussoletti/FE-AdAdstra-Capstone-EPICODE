import { Container, Accordion, Row, Col, Image } from "react-bootstrap"
import { footerInfo } from "../misc/arrays"
const Footer = () => {
  return (
    <div className="bg-black">
      <Container fluid="md" className="px-4 pb-3 pt-2 mt-5">
        <Row xs={1} md={2}>
          <Col xs={{ order: 1 }} md={{ order: 0 }} className="p-0">
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
          <Col
            md={{ order: 1 }}
            xs={{ order: 0 }}
            className="py-4 d-flex justify-content-md-end justify-content-center align-items-start"
          >
            <Image style={{ maxHeight: "190px" }} src="./logo-adastra.png" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
