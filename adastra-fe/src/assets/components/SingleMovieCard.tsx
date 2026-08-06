import { Row, Col, Image } from "react-bootstrap"
import MovieStartTime from "./MovieStartTime"
const SingleMovieCard = () => {
  const tempArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]

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
      <Row xs={1} md={4} lg={5} xxl={6} className="mt-4">
        {tempArray.map(() => {
          return (
            <Col className="px-2 pb-3 cursor-pointer">
              <MovieStartTime />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default SingleMovieCard
