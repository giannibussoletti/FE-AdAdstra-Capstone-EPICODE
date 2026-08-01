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
              key={poster.name + " " + randomNum}
            >
              <img
                className="w-100"
                src={poster.link}
                alt={poster.name + " poster"}
              />

              <h3 className="m-0 pt-3 text-uppercase">{poster.name}</h3>
              <p className="m-0 date-and-time">
                {poster.date.toLocaleDateString("it-IT") +
                  " " +
                  poster.time +
                  "h"}
              </p>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default MustSeeMovies
