import type {
  BookingType,
  CinemaFetchType,
  MovieDetails,
  MovieGroup,
  ProfileType,
  SeatGroup,
  UserMovies,
} from "../fetchs/fetchTypes"

export const fetchCinemas = async (): Promise<CinemaFetchType[]> => {
  try {
    const res = await fetch("http://localhost:5555/public/cinemas")

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
    const res = await fetch("http://localhost:5555/public/screening-times", {
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
export const fetchSeats = async (
  cinemaId: string,
  screenId: string,
): Promise<SeatGroup[]> => {
  try {
    const res = await fetch("http://localhost:5555/public/seats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cinemaId, screenId }),
    })

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: SeatGroup[] = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const fetchBookedSeats = async (
  screeningTimeId: string,
): Promise<SeatGroup[]> => {
  try {
    const res = await fetch("http://localhost:5555/public/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ screeningTimeId }),
    })

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: SeatGroup[] = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

const publicBooking = "http://localhost:5555/public/bookings"
const noPublic = "http://localhost:5555/bookings"

export const fetchBooking = async (
  screenTimeId: string,
  maxSeats: SeatGroup[],
  totalCost: number,
  guestEmail: string,
  coupon: string,
): Promise<BookingType> => {
  try {
    const isLogged = localStorage.getItem("accessToken")
    const res = await fetch(isLogged ? noPublic : publicBooking, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + isLogged,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        screenTimeId,
        maxSeats,
        totalCost,
        guestEmail,
        coupon,
      }),
    })

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: BookingType = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const fetchRegistration = async (
  name: string,
  surname: string,
  birthDate: string,
  email: string,
  password: string,
): Promise<BookingType> => {
  try {
    const res = await fetch("http://localhost:5555/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        birthDate,
        email,
        password,
      }),
    })

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: BookingType = await res.json()
    console.log(data)
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const fetchLogin = async (
  email: string,
  password: string,
): Promise<ProfileType> => {
  try {
    const res = await fetch("http://localhost:5555/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: ProfileType = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const fetchMovies = async (): Promise<MovieDetails[]> => {
  try {
    const res = await fetch("http://localhost:5555/public/movies")

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: MovieDetails[] = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const fetchMovieDetails = async (
  movieId: string,
): Promise<MovieDetails> => {
  try {
    const res = await fetch("http://localhost:5555/public/movies/" + movieId)

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: MovieDetails = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const verifyAccessToken = async (token: string): Promise<void> => {
  try {
    const res = await fetch("http://localhost:5555/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    })

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    return
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const fetchUserMovies = async (): Promise<UserMovies[]> => {
  try {
    const isLogged = localStorage.getItem("accessToken")
    const res = await fetch("http://localhost:5555/tickets/user-movies", {
      headers: {
        Authorization: "Bearer " + isLogged,
      },
    })

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: UserMovies[] = await res.json()

    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
