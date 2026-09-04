import MainTitles from "./MainTitles"
import NowPlayingMappedMovies from "./NowPlayingMappedMovies"

const NowPlayinSection = () => {
  return (
    <div className="py-3">
      <MainTitles string="ora in sala" />
      <NowPlayingMappedMovies />
    </div>
  )
}

export default NowPlayinSection
