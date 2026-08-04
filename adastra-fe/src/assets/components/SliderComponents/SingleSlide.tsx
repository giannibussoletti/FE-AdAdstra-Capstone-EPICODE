import { Col, Image } from "react-bootstrap"
// import { useNavigate } from "react-router"
import type { SliderPoster } from "../../misc/types"
const SingleSlide = function ({ posterLink, originalTitle }: SliderPoster) {
  // const navigate = useNavigate()
  return (
    <Col className="p-0">
      <Image
        className="w-100 image-query"
        src={posterLink}
        alt={originalTitle}
      />
      <h4 className="fw-normal text-uppercase mt-3">{originalTitle}</h4>
    </Col>
  )
}

export default SingleSlide
