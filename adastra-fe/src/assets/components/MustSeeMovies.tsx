import { Carousel } from "react-bootstrap"
import { arrayPoster, randomNum } from "../temp"
import MainTitles from "./MainTitles"

const MustSeeMovies = () => {
  return (
    <>
      <MainTitles title={"da non perdere"} />
      <Carousel indicators={false}>
        {arrayPoster.map((poster) => {
          return (
            <Carousel.Item
              className="text-center"
              key={poster.nome + " " + randomNum}
            >
              <img src={poster.link} alt={poster.nome + " poster"} />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default MustSeeMovies
