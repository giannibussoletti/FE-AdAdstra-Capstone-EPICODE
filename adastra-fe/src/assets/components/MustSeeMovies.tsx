import { Carousel, Card, Row, Col } from "react-bootstrap"
import { arrayPoster, randomNum } from "../temp"
import MainTitles from "./MainTitles"
import Buttons from "./Buttons"
const MustSeeMovies = () => {
  return (
    <div className="mb-3 mb-lg-4">
      <MainTitles string={"da non perdere"} />
      <Carousel indicators={false}>
        {arrayPoster.map((poster) => {
          return (
            <Carousel.Item
              className="text-center"
              key={poster.name + " " + randomNum}
            >
              <div className="d-md-none">
                <img
                  className="w-100 "
                  src={poster.link}
                  alt={poster.name + " poster"}
                />
                <h3 className="m-0 pt-3 text-uppercase">{poster.name}</h3>
                <p className="m-0 date-and-time">
                  {poster.date.toLocaleDateString("it-IT") +
                    " " +
                    poster.time +
                    "h"}
                </p>
              </div>
              {/* Usare le dimensioni di bootstrap per decidere quando far apparire il carosello con le carde e quando far apparire solo quello con il poster
               */}
              <Card className="rounded-0 bg-transparent text-light d-md-block d-none">
                <Row>
                  <Col>
                    <Card.Img className="rounded-0" src={poster.link} />
                  </Col>
                  <Col xs="8">
                    <Card.Body className="text-start p-0">
                      <Card.Title className="m-0">
                        <h3 className="m-0 p-0 text-uppercase">
                          {poster.name}
                        </h3>
                      </Card.Title>
                      <Card.Text>
                        <p className="m-0 p-0 date-and-time">
                          {poster.date.toLocaleDateString("it-IT") +
                            " " +
                            poster.time +
                            "h"}
                        </p>
                        <p className="mt-2">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Necessitatibus iusto consequuntur quis fugit nam
                          vel corporis cumque consectetur architecto? Ut fugiat
                          molestias consectetur dolor expedita sequi aliquid.
                          Veritatis, maxime sapiente? Lorem ipsum dolor sit
                          amet, consectetur adipisicing elit. Pariatur rerum
                          sint, id consequuntur doloremque porro obcaecati
                          accusantium neque minima ad dolore mollitia provident
                          dicta dignissimos blanditiis consectetur. Earum,
                          pariatur aliquid!
                        </p>
                      </Card.Text>

                      <div className="mt-4">
                        <Buttons string={"acquista biglietto"} />
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Carousel.Item>
          )
        })}
      </Carousel>
      <div className="text-center mt-4 d-block d-md-none">
        <Buttons string={"acquista biglietto"} />
      </div>
    </div>
  )
}

export default MustSeeMovies
