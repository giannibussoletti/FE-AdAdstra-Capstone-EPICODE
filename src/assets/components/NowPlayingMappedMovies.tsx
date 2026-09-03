import { Row, Col, Image } from "react-bootstrap"
import MovieTimesTabs from "./MovieTimesTabs"

import { useEffect, useState } from "react"
import { fetchScreenTimes } from "../fetchs"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import { cinemaMoviesArray } from "../redux/reducers/MovieSlice"
import type { MovieGroup } from "../fetchs/fetchTypes"
import { numbersToTime } from "../misc/functions"

const NowPlayingMappedMovies = () => {
  const cinemaId = useAppSelector((state) => state.menuState.cinemaId)
  const dispatch = useAppDispatch()
  const [movies, setMovies] = useState<MovieGroup[]>([])

  useEffect(() => {
    fetchScreenTimes(cinemaId)
      .then((data) => {
        setMovies(data)
        dispatch(cinemaMoviesArray(data))
      })
      .catch((err) => console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cinemaId])

  return (
    <div className="mt-5">
      {movies.map((movie, i) => {
        return (
          <Row key={movie.movieDetails.id} className="mt-0 mb-xxl-0">
            <Col xs={4} xxl={3}>
              <Image fluid src={movie.movieDetails.posterLink} />
            </Col>
            <Col xs={8} xxl={5} className="mt-0">
              <h3 className="fw-normal text-uppercase fw-medium d-none d-lg-block  mt-0 mb-4">
                {movie.movieDetails.title}
              </h3>

              <h5 className="fw-normal text-uppercase fw-medium d-lg-none d-block mt-0 mb-4">
                {movie.movieDetails.title}
              </h5>
              <div className="mb-3">
                <p className="single-movie-title-section">Cast</p>
                <p className="single-movie-details-section">{movie.movieDetails.starring}</p>
              </div>
              <div className="mb-3">
                <p className="single-movie-title-section">Durata</p>
                <p className="single-movie-details-section">
                  {numbersToTime(movie.movieDetails.duration)}m
                </p>
              </div>
              <div className="mb-3">
                <p className="single-movie-title-section">Data di uscita</p>
                <p className="single-movie-details-section">
                  {new Date(movie.movieDetails.releaseDate).toLocaleDateString()}
                </p>
              </div>
              <div className="d-none d-lg-block">
                <p>{movie.movieDetails.plot}</p>
              </div>
            </Col>
            <Col xxl={4}>
              <MovieTimesTabs movie={movie} />
            </Col>
            {i !== movies.length - 1 && <hr className="hr-movies-home" />}
          </Row>
        )
      })}
    </div>
  )
}

export default NowPlayingMappedMovies
