import { Row, Col, Image } from "react-bootstrap"
import MovieStartTime from "./MovieStartTime"
const SingleMovieCard = () => {
  const tempArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]

  return (
    <>
      <Row>
        <Col xs="auto">
          <Image src="https://placehold.co/150x200" />
        </Col>
        <Col>
          <h5 className="fw-normal text-uppercase fw-medium mb-4">
            spider-man: brand new day
          </h5>
          <div className="mb-3">
            <p className="single-movie-title-section">Cast</p>
            <p className="single-movie-details-section">
              Gianni Fantoni, Mario Rossi, Federico Bianchi, Aldo Baglio,
              Giacomo Poretti, Giovanni Storti
            </p>
          </div>
          <div>
            <p className="single-movie-title-section">Durata</p>
            <p className="single-movie-details-section">2.50h</p>
          </div>
        </Col>
      </Row>
      <Row xs={1} md={4} lg={5} xxl={6}>
        {tempArray.map((time) => {
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
