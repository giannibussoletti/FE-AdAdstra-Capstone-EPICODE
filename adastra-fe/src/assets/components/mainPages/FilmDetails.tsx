import { arrayPoster } from "../../temp"
import CardMovieDetails from "../CardMovieDetails"
import { useParams } from "react-router"

const FilmDetails = () => {
  const params = useParams()

  console.log(params.movieid)
  return (
    <CardMovieDetails
      id={arrayPoster[0].id}
      name={arrayPoster[0].name}
      link={arrayPoster[0].link}
      date={arrayPoster[0].date}
      time={arrayPoster[0].time}
    />
  )
}
export default FilmDetails
