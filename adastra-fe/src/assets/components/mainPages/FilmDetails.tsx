import CardMovieDetails from "../CardMovieDetails"

import { useAppSelector } from "../../redux/hooks"

const FilmDetails = () => {
  const filmDetails = useAppSelector((state) => state.filmDetailsState)

  return (
    <CardMovieDetails
      name={filmDetails.name}
      link={filmDetails.link}
      date={filmDetails.date}
      time={filmDetails.time}
    />
  )
}
export default FilmDetails
