import type { CitiesFetchType } from "./types"

export const fetchingMovies = () => {
  fetch("http://localhost:5555/movies")
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        console.log(response)

        throw new Error(response.statusText)
      }
    })
    .then((data) => {
      console.log(data.content)
    })
    .catch((err) => err)
}

export const fetchCities = async (): Promise<CitiesFetchType[]> => {
  try {
    const res = await fetch("http://localhost:5555/cities")

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: CitiesFetchType[] = await res.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
