const MovieStartTime = () => {
  return (
    <div className=" bg-time-color rounded rounded-3 px-3 py-2 my-3 single-movie-time">
      <p className="m-0 fw-semibold fs-5">16:00 - 19:27</p>
      <p className="text-subtext-time fst-italic fw-medium">Sala 10</p>
      <p className="text-end m-0">
        <span className="text-subtext-time fs-6">da</span>{" "}
        <span className="fw-semibold fs-5">4,99€</span>
      </p>
    </div>
  )
}

export default MovieStartTime
