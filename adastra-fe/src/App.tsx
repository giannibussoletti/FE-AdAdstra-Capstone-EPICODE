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
import SeatChoice from "./assets/components/mainPages/SeatsChoice"
import PaymentPage from "./assets/components/mainPages/PaymentPage"
import RestorationScroll from "./assets/components/RestorationScroll/RestorationScroll"
import ProfilePage from "./assets/components/mainPages/ProfilePage"
import RegistrationPage from "./assets/components/mainPages/RegistrationPage"
import LoginPage from "./assets/components/mainPages/LoginPage"
import MovieDetailsPage from "./assets/components/mainPages/MovieDetailsPage"
import ProfileDetails from "./assets/components/mainPages/ProfileDetails"
//React Router
import { Route, BrowserRouter as Router, Routes } from "react-router"
import NotFound from "./assets/components/mainPages/NotFound"

const App = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Router>
        <RestorationScroll />
        <header>
          <Navbar />
        </header>
        <main style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dettagli/:movieId" element={<MovieDetailsPage />} />
            <Route path="/scelta-posto" element={<SeatChoice />} />
            <Route path="/pagamento" element={<PaymentPage />} />
            <Route path="/profilo" element={<ProfilePage />} />
            <Route path="/registrazione" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dettagli-profilo" element={<ProfileDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  )
}

export default App
