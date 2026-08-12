import { Carousel } from "react-bootstrap"
import { arrayPoster } from "../temp"
import MainTitles from "./MainTitles"
import Buttons from "./Buttons"
import CardMovieDetails from "./CardMovieDetails"
import { useNavigate } from "react-router"
import { useState } from "react"
import { useAppDispatch } from "../redux/hooks"
import { movieChoice } from "../redux/reducers/MovieSlice"
const MustSeeMovies = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)

  const handleIndex = (ActualIndex: number) => {
    setIndex(ActualIndex)
  }

  const movieTitle = arrayPoster[index]?.movieTitle
  const duration = arrayPoster[index]?.duration
  const movieID = arrayPoster[index]?.movieID

  return (
    <>
      <MainTitles string={"da non perdere"} />
      <Carousel indicators={false} touch={true} onSelect={handleIndex}>
        {arrayPoster.map((poster) => {
          return (
            <Carousel.Item
              interval={3000}
              className="text-center"
              key={poster.movieID}
            >
              <CardMovieDetails
                movieID={poster.movieID}
                movieTitle={poster.movieTitle}
                imglink={poster.imglink}
                date={poster.date}
                duration={poster.duration}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
      <div
        className="text-center mt-4 d-block d-md-none"
        onClick={() => {
          navigate("/dettagli/" + movieID)
          dispatch(movieChoice({ movieTitle, duration, movieID }))
        }}
      >
        <Buttons string={"acquista biglietto"} />
      </div>
    </>
  )
}

export default MustSeeMovies
