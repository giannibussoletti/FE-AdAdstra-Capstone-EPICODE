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

//React Router
import { Route, BrowserRouter as Router, Routes } from "react-router"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temp" element={<Navbar />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
