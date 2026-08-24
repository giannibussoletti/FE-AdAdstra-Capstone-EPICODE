import MainTitles from "./MainTitles"
import SingleMovieCard from "./SingleMovieCard"

const NowPlayinSection = () => {
  return (
    <div className="py-3">
      <MainTitles string="ora in sala" />
      <SingleMovieCard />
    </div>
  )
}

export default NowPlayinSection
