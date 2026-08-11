import { Carousel } from "react-bootstrap"
import { arrayPoster } from "../temp"
import MainTitles from "./MainTitles"
import Buttons from "./Buttons"
import CardMovieDetails from "./CardMovieDetails"
import { useNavigate } from "react-router"
import { useState } from "react"

const MustSeeMovies = () => {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)

  const handleIndex = (ActualIndex: number) => {
    setIndex(ActualIndex)
  }

  const idLink = arrayPoster[index]?.id

  return (
    <>
      <MainTitles string={"da non perdere"} />
      <Carousel indicators={false} touch={true} onSelect={handleIndex}>
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
      <div
        className="text-center mt-4 d-block d-md-none"
        onClick={() => navigate("/dettagli/" + idLink)}
      >
        <Buttons string={"acquista biglietto"} />
      </div>
    </>
  )
}

export default MustSeeMovies
