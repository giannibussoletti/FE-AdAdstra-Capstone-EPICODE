import MainTitles from "./MainTitles"
import SingleMovieCard from "./SingleMovieCard"
import { useAppSelector } from "../redux/hooks"
import { useState, useEffect } from "react"
import { fetchScreenTimes } from "../fetchs"
import type { DateTimeFetch } from "../fetchs/fetchTypes"
const NowPlayinSection = () => {
  const cinemaId = useAppSelector((state) => state.menuState.cinemaId)
  const [movies, setMovies] = useState<DateTimeFetch[]>([])
  const [newMovie, setNewMovie] = useState<string>("")
  let movieId: string = ""
  useEffect(() => {
    fetchScreenTimes(cinemaId)
      .then((data) => {
        setMovies(data)
        console.log(movies)
      })
      .catch((err) => console.error(err))
  }, [cinemaId])

  return (
    <>
      <MainTitles string="ora in sala" />
      {movies.map(
        (date) => {
          const isNewMovie = movieId !== date.movieId.id
          movieId = date.movieId.id

          return (
            <p key={date.id}>
              {isNewMovie && date.movieId.title}, <br />
              {date.dateTime}, {date.screenId.screenNumber}
            </p>
          )
        },

        // <SingleMovieCard />
      )}
    </>
  )
}

export default NowPlayinSection
