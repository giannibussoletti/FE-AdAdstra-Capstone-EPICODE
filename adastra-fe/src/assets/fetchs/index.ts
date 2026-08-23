import type {
  AccessToken,
  BookingType,
  CinemaFetchType,
  MovieGroup,
  ProfileType,
  SeatGroup,
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

export const fetchBooking = async (
  userId: null,
  screenTimeId: string,
  maxSeats: SeatGroup[],
  totalCost: number,
  guestEmail: string,
  coupon: string,
): Promise<BookingType> => {
  try {
    const res = await fetch("http://localhost:5555/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
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
  birthDate: Date | null,
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
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const fetchLogin = async (
  email: string,
  password: string,
): Promise<AccessToken> => {
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
    const data: AccessToken = await res.json()
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
export const fetchProfile = async (): Promise<ProfileType> => {
  try {
    const res = await fetch("http://localhost:5555/user/profile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
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
