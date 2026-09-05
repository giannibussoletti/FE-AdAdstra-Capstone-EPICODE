import type {
  BookingType,
  CinemaFetchType,
  MovieDetails,
  MovieGroup,
  ProfileType,
  SeatGroup,
  UpdateResponse,
  UserMovies,
} from "../fetchs/fetchTypes"

export const fetchCinemas = async (): Promise<CinemaFetchType[]> => {
  try {
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/public/cinemas",
    )

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

export const fetchScreenTimes = async (cinemaId: string): Promise<MovieGroup[]> => {
  try {
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/public/screening-times",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cinemaId }),
      },
    )

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
export const fetchSeats = async (cinemaId: string, screenId: string): Promise<SeatGroup[]> => {
  try {
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/public/seats",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cinemaId, screenId }),
      },
    )

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

export const fetchBookedSeats = async (screeningTimeId: string): Promise<SeatGroup[]> => {
  try {
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/public/tickets",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ screeningTimeId }),
      },
    )

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

export const fetchBooking = async (
  screenTimeId: string,
  maxSeats: SeatGroup[],
  totalCost: number,
  guestEmail: string,
  coupon: string,
): Promise<BookingType> => {
  const publicBooking =
    "https://be-adadstra-capstone-epicode-production.up.railway.app/public/bookings"
  const noPublic = "https://be-adadstra-capstone-epicode-production.up.railway.app/bookings"
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
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/auth/registration",
      {
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
      },
    )

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

export const fetchLogin = async (email: string, password: string): Promise<ProfileType> => {
  try {
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    )

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
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/public/movies",
    )

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

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
  try {
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/public/movies/" + movieId,
    )

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
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/auth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      },
    )

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
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/tickets/user-movies",
      {
        headers: {
          Authorization: "Bearer " + isLogged,
        },
      },
    )

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

export const fetchUpdatePsw = async (
  oldPassword: string,
  newPassword: string,
): Promise<UpdateResponse> => {
  try {
    const isLogged = localStorage.getItem("accessToken")
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/user/profile/password",
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + isLogged,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
        }),
      },
    )
    console.log(res)
    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: UpdateResponse = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const fetchUpdateMail = async (newEmail: string): Promise<UpdateResponse> => {
  try {
    const isLogged = localStorage.getItem("accessToken")
    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/user/profile/new-email",
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + isLogged,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newEmail,
        }),
      },
    )
    console.log(res)
    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: UpdateResponse = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const fetchUpdateProPic = async (image: FileList): Promise<{ imageLink: string }> => {
  try {
    const formData = new FormData()
    formData.append("avatar_pic", image[0])

    const isLogged = localStorage.getItem("accessToken")

    const res = await fetch(
      "https://be-adadstra-capstone-epicode-production.up.railway.app/user/profile/avatar",
      {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + isLogged,
        },
        body: formData,
      },
    )
    console.log(res)
    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: { imageLink: string } = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
