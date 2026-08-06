import { Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { SliderPoster } from "../../misc/types"
import { useAppDispatch } from "../../redux/hooks"
import { setDetails } from "../../redux/reducers/filmDetailsSlice"
const SingleSlide = function ({
  posterLink,
  originalTitle,
  details,
}: SliderPoster) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <Col
      className="p-0"
      onClick={() => {
        dispatch(setDetails(details))
        navigate("/details")
      }}
    >
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
