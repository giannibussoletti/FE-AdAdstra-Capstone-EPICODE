import { Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { Poster } from "../../misc/types"
// import type { SliderPoster } from "../../misc/types"
// import { useAppDispatch } from "../../redux/hooks"
// import { setDetails } from "../../redux/reducers/filmDetailsSlice"
const SingleSlide = function ({ id, name, link }: Poster) {
  // const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <Col
      className="p-0"
      onClick={() => {
        navigate("/dettagli/" + id)
      }}
    >
      <Image className="w-100 image-query" src={link} alt={name + " poster"} />
      <h4 className="fw-normal text-uppercase mt-3">{name}</h4>
    </Col>
  )
}

export default SingleSlide
