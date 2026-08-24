import { useNavigate } from "react-router"
import { useAppDispatch } from "../redux/hooks"
import { timeAndScreen, movieChoice } from "../redux/reducers/MovieSlice"
import type { DispatchMovie } from "../redux/reducers/SlicesTypes"

const times = (timeStart: string, duration: number) => {
  const hours = new Date(timeStart).getHours()
  const minute = new Date(timeStart).getMinutes()
  const time = new Date(timeStart).getTime()
  const timeEnd = time + duration * 60000
  const endHours = new Date(timeEnd).getHours()
  const endMinute = new Date(timeEnd).getMinutes()
  return hours + ":" + minute + " - " + endHours + ":" + endMinute
}

const MovieStartTime = ({
  movieTitle,
  movieID,
  duration,
  timeStart,
  screenId,
  screen,
  screeningTimeId,
}: DispatchMovie) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  //Temp variables

  return (
    <div
      className=" bg-time-color rounded rounded-3 px-3 py-2 single-movie-time"
      onClick={() => {
        dispatch(timeAndScreen({ timeStart, screen, screenId }))
        dispatch(
          movieChoice({
            movieID,
            movieTitle,
            duration,
            timeStart,
            screen,
            screenId,
            screeningTimeId,
          }),
        )
        navigate("/scelta-posto/")
      }}
    >
      <p className="m-0 fw-semibold fs-6">{times(timeStart, duration)}</p>
      <p className="text-subtext-time fst-italic fw-medium">sala {screen}</p>
      <p className="text-end m-0">
        <span className="text-subtext-time fs-6">da </span>
        <span className="fw-semibold fs-6">4,99€</span>
      </p>
    </div>
  )
}

export default MovieStartTime
