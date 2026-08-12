import { useNavigate } from "react-router"
import { useAppDispatch } from "../redux/hooks"
import { timeAndScreen, movieChoice } from "../redux/reducers/MovieSlice"
import type { DispatchMovie } from "../redux/reducers/SlicesTypes"
const MovieStartTime = ({ movieTitle, movieID, duration }: DispatchMovie) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  //Temp variables
  const timeStartEnd = "16:00 - 19:27"
  const screen = 1

  return (
    <div
      className=" bg-time-color rounded rounded-3 px-3 py-2 single-movie-time"
      onClick={() => {
        dispatch(timeAndScreen({ timeStartEnd, screen }))
        dispatch(movieChoice({ movieID, movieTitle, duration }))
        navigate("/scelta-posto/")
      }}
    >
      <p className="m-0 fw-semibold fs-6">{timeStartEnd}</p>
      <p className="text-subtext-time fst-italic fw-medium">sala {screen}</p>
      <p className="text-end m-0">
        <span className="text-subtext-time fs-6">da</span>
        <span className="fw-semibold fs-6">4,99€</span>
      </p>
    </div>
  )
}

export default MovieStartTime
