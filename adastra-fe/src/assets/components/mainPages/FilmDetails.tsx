import { Container } from "react-bootstrap"
import SingleMovieCard from "../SingleMovieCard"
import TimeTabs from "../TimeTabs"
const FilmDetails = () => {
  return (
    <Container className="mt-5">
      <SingleMovieCard />
      <div className="mt-4">
        <TimeTabs />
      </div>
    </Container>
  )
}
export default FilmDetails
