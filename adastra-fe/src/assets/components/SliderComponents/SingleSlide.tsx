import { Col, Image } from "react-bootstrap"
// import { useNavigate } from "react-router"
import type { SliderPoster } from "../../misc/types"
const SingleSlide = function ({
  uniqueId,
  posterLink,
  originalTitle,
}: SliderPoster) {
  // const navigate = useNavigate()
  return (
    <Col className="p-0">
      <Image
        className="w-100"
        src={posterLink}
        alt={originalTitle}
        id={uniqueId}
      />
      <h4 className="fw-normal text-uppercase mt-3">{originalTitle}</h4>
    </Col>
  )
}

export default SingleSlide
