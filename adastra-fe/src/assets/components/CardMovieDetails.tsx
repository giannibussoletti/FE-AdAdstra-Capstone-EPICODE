import { Card, Col, Row } from "react-bootstrap"
import type { PosterReleaseDate } from "../misc/types"
import Buttons from "./Buttons"
import { useNavigate } from "react-router"
const CardMovieDetails = ({
  movieID,
  movieTitle,
  imglink,
  date,
  duration,
}: PosterReleaseDate) => {
  const navigate = useNavigate()
  return (
    <Card className="rounded-0 bg-transparent text-light d-md-block">
      <Row xs={1} md={2}>
        <Col>
          <Card.Img className="rounded-0" src={imglink} />
        </Col>

        <Col>
          <Card.Body className="p-0 text-center text-md-start">
            <Card.Title className="mt-3 mb-0 mt-md-0">
              <h3 className="m-0 p-0 text-uppercase w-100">{movieTitle}</h3>
            </Card.Title>

            <Card.Text className="m-0 p-0 date-and-time">
              {date.toLocaleDateString() + " " + duration + "h"}
            </Card.Text>

            <Card.Text
              className={
                location.pathname === "/details/" + movieID
                  ? "d-block text-start mt-2"
                  : "d-none d-md-block text-start mt-2 "
              }
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus iusto consequuntur quis fugit nam vel corporis
              cumque consectetur architecto? Ut fugiat molestias consectetur
              dolor expedita sequi aliquid. Veritatis, maxime sapiente? Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Pariatur rerum
              sint, id consequuntur doloremque porro obcaecati accusantium neque
              minima ad dolore mollitia provident dicta dignissimos blanditiis
              consectetur. Earum, pariatur aliquid!
            </Card.Text>

            <div
              onClick={() => navigate("/dettagli/" + movieID)}
              className="mt-4 d-none d-md-inline-block"
            >
              <Buttons string={"acquista biglietto"} />
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}
export default CardMovieDetails
