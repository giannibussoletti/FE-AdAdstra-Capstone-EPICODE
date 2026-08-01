import { Carousel } from "react-bootstrap"
import { arrayPoster, randomNum } from "../temp"
import MainTitles from "./MainTitles"
import Buttons from "./Buttons"
const MustSeeMovies = () => {
  return (
    <>
      <MainTitles string={"da non perdere"} />
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
      <div className="text-center mb-3 mt-4">
        <Buttons string={"acquista biglietto"} />
      </div>
    </>
  )
}

export default MustSeeMovies
