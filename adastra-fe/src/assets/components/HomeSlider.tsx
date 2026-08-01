import { Carousel, Container, Row, Col } from "react-bootstrap"
// TODO da cancellare una volta fatta la fetch per richiamare le immagini dal DB
import { arrayMapImg, randomNum } from "../temp"

const HomeSlider = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <Carousel controls={false} indicators={false}>
            {arrayMapImg.map((img) => {
              return (
                <Carousel.Item key={randomNum.toString()}>
                  <img className="w-100" src={img} alt="" />
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
