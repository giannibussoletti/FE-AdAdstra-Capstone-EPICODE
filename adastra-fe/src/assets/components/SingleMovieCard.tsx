import { Row, Col, Image } from "react-bootstrap"
import MovieStartTime from "./MovieStartTime"
const SingleMovieCard = () => {
  return (
    <>
      <Row>
        <Col xs="auto" lg={3}>
          <Image fluid src="https://placehold.co/1500x2000" />
        </Col>
        <Col lg={7} className="mt-4 mt-lg-0">
          <h4 className="fw-normal text-uppercase fw-medium mb-4">
            spider-man: brand new day
          </h4>
          <div className="mb-3">
            <p className="single-movie-title-section">Cast</p>
            <p className="single-movie-details-section">
              Gianni Fantoni, Mario Rossi, Federico Bianchi, Aldo Baglio,
              Giacomo Poretti, Giovanni Storti
            </p>
          </div>
          <div className="mb-3">
            <p className="single-movie-title-section">Durata</p>
            <p className="single-movie-details-section">2.50h</p>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit iusto pariatur facilis perferendis quod, nobis
              dolore, minus distinctio consectetur exercitationem, quaerat odio
              excepturi? Vel labore commodi alias dolorem quae dolores. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Asperiores
              architecto autem dolores earum eius temporibus repellat vero quod
              suscipit natus velit, modi incidunt reprehenderit. Maiores non
              dolorem sit recusandae aspernatur?
            </p>
          </div>
        </Col>
      </Row>
      <Row xs={1} md={4}>
        <Col>
          <MovieStartTime />
        </Col>
      </Row>
    </>
  )
}

export default SingleMovieCard
