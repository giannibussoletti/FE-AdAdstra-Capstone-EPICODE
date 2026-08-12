import { Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { Poster } from "../../misc/types"
import { useAppDispatch } from "../../redux/hooks"
import { movieChoice } from "../../redux/reducers/MovieSlice"
const SingleSlide = function ({
  movieID,
  movieTitle,
  imglink,
  duration,
}: Poster) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <Col
      className="p-0"
      onClick={() => {
        dispatch(movieChoice({ movieID, movieTitle, duration }))
        navigate("/dettagli/" + movieID)
      }}
    >
      <Image
        className="w-100 image-query"
        src={imglink}
        alt={movieTitle + " poster"}
      />
      <h4 className="fw-normal text-uppercase mt-3">{movieTitle}</h4>
    </Col>
  )
}

export default SingleSlide
