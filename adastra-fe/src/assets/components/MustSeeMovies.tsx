import { Carousel } from "react-bootstrap"
import { arrayPoster } from "../temp"
import MainTitles from "./MainTitles"
import Buttons from "./Buttons"
import CardMovieDetails from "./CardMovieDetails"
const MustSeeMovies = () => {
  return (
    <>
      <MainTitles string={"da non perdere"} />
      <Carousel indicators={false}>
        {arrayPoster.map((poster) => {
          return (
            <Carousel.Item
              interval={3000}
              className="text-center"
              key={poster.id}
            >
              <CardMovieDetails
                id={poster.id}
                name={poster.name}
                link={poster.link}
                date={poster.date}
                time={poster.time}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
      <div className="text-center mt-4 d-block d-md-none">
        <Buttons string={"acquista biglietto"} />
      </div>
    </>
  )
}

export default MustSeeMovies
