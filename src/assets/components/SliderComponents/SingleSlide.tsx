import { Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { Poster } from "../../misc/types"

const SingleSlide = function ({ movieID, movieTitle, imglink }: Poster) {
  const navigate = useNavigate()
  return (
    <Col
      className="p-0"
      onClick={() => {
        navigate("/dettagli/" + movieID)
      }}>
      <Image className="w-100 image-query" src={imglink} alt={movieTitle + " poster"} />
      <h4 className="fw-normal text-center text-uppercase mt-3">{movieTitle}</h4>
    </Col>
  )
}

export default SingleSlide
