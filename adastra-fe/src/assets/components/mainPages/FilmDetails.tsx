import { Container } from "react-bootstrap"
import SingleMovieCard from "../SingleMovieCard"

import { useParams } from "react-router"

const FilmDetails = () => {
  const params = useParams()

  console.log(params.movieid)
  return (
    <Container className="mt-5">
      <SingleMovieCard />
    </Container>
  )
}
export default FilmDetails
