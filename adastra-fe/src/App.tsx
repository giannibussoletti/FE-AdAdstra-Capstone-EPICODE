import "./assets/css/custom.scss"
//Font awesome
import { library } from "@fortawesome/fontawesome-svg-core"

import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)

//Components
import Navbar from "./assets/components/Navbar"
import Home from "./assets/components/mainPages/Home"
import Footer from "./assets/components/Footer"
import FilmDetails from "./assets/components/mainPages/FilmDetails"
import SeatChoice from "./assets/components/mainPages/SeatsChoice"
import PaymentPage from "./assets/components/mainPages/PaymentPage"
import RestorationScroll from "./assets/components/RestorationScroll/RestorationScroll"
import ProfilePage from "./assets/components/mainPages/ProfilePage"
//React Router
import { Route, BrowserRouter as Router, Routes } from "react-router"
import { fetchingMovies, fetchCities } from "./assets/misc/fetchs"
import { useEffect } from "react"
const App = () => {
  useEffect(() => {
    fetchingMovies()
    fetchCities()
  }, [])

  return (
    <>
      <Router>
        <RestorationScroll />
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dettagli/:filmid" element={<FilmDetails />} />
            <Route path="/scelta-posto" element={<SeatChoice />} />
            <Route path="/pagamento" element={<PaymentPage />} />
            <Route path="/profilo" element={<ProfilePage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  )
}

export default App
