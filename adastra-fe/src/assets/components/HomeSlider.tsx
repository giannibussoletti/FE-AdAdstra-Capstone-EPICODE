import { Carousel, Container, Row, Col } from "react-bootstrap"
// TODO da cancellare una volta fatta la fetch per richiamare le immagini dal DB
import { arrayMapImg } from "../temp"

const HomeSlider = () => {
  return (
    <Container className="p-0">
      <Row>
        <Col className="p-0">
          <Carousel controls={false} indicators={false} className="mt-4">
            {arrayMapImg.map((img) => {
              return (
                <Carousel.Item key={img.id} interval={5000}>
                  <img className="w-100 rounded-4" src={img.slide} alt="" />
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeSlider
