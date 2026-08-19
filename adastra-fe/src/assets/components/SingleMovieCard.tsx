import { Row, Col, Image } from "react-bootstrap"
import { useLocation } from "react-router"
import TimeTabs from "./TimeTabs"
const SingleMovieCard = () => {
  const pathname = useLocation().pathname
  const movieID = "8"
  const movieTitle = "spider-man: brand new day"
  const cast =
    "Gianni Fantoni, Mario Rossi, Federico Bianchi, Aldo Baglio,Giacomo Poretti, Giovanni Storti"
  const duration = "2.50"
  return (
    <>
      <Row>
        <Col xs={pathname !== "/" ? "auto" : 3} md={3}>
          <Image fluid src="https://placehold.co/1500x2000" />
        </Col>
        <Col
          xs={pathname !== "/" ? 12 : 9}
          md={9}
          className={pathname !== "/" ? "mt-4" : "mt-0"}
        >
          <h4 className="fw-normal text-uppercase fw-medium mb-4">
            {movieTitle}
          </h4>
          <div className="mb-3">
            <p className="single-movie-title-section">Cast</p>
            <p className="single-movie-details-section">{cast}</p>
          </div>
          <div className="mb-3">
            <p className="single-movie-title-section">Durata</p>
            <p className="single-movie-details-section">{duration}h</p>
          </div>
          <div className={pathname !== "/" ? "" : "d-none d-lg-block"}>
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
        <TimeTabs
          movieTitle={movieTitle}
          movieID={movieID}
          duration={duration}
        />
      </Row>
    </>
  )
}

export default SingleMovieCard
