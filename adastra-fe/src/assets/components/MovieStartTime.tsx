import { useNavigate } from "react-router"
import { useAppDispatch } from "../redux/hooks"
import { movieChoice } from "../redux/reducers/MovieSlice"
import type { DispatchMovie } from "../redux/reducers/SlicesTypes"
import { calculateMovieTime } from "../misc/functions"

const MovieStartTime = ({
  movieTitle,
  movieID,
  duration,

  screenId,
  screen,
  screeningTimeId,
  date,
}: DispatchMovie) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div
      className=" bg-time-color rounded rounded-3 px-3 py-2 single-movie-time"
      onClick={() => {
        dispatch(
          movieChoice({
            movieID,
            movieTitle,
            duration,
            screen,
            screenId,
            screeningTimeId,
            date,
          }),
        )
        navigate("/scelta-posto/")
      }}
    >
      <p className="m-0 fw-semibold fs-6">
        {calculateMovieTime(date, duration)}
      </p>
      <p className="text-subtext-time fst-italic fw-medium">sala {screen}</p>
      <p className="text-end m-0">
        <span className="text-subtext-time fs-6">da </span>
        <span className="fw-semibold fs-6">4,99€</span>
      </p>
    </div>
  )
}

export default MovieStartTime
