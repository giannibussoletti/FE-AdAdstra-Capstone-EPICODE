import type { CinemaFetchType, MovieGroup } from "../fetchs/fetchTypes"

export const fetchCinemas = async (): Promise<CinemaFetchType[]> => {
  try {
    const res = await fetch("http://localhost:5555/cinemas")

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: CinemaFetchType[] = await res.json()

    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const fetchScreenTimes = async (
  cinemaId: string,
): Promise<MovieGroup[]> => {
  try {
    const res = await fetch("http://localhost:5555/screening-times", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cinemaId }),
    })

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: MovieGroup[] = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
