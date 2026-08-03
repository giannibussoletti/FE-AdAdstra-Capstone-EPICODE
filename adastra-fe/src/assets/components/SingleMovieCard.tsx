import { Row, Col, Image } from "react-bootstrap"
const SingleMovieCard = () => {
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
      <Row>
        <Col>Orari</Col>
      </Row>
    </>
  )
}

export default SingleMovieCard
