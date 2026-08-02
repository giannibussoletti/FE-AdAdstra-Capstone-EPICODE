import "./assets/css/custom.scss"
import { library } from "@fortawesome/fontawesome-svg-core"

import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)
import Navbar from "./assets/components/Navbar"
import Home from "./assets/components/Home"
import Footer from "./assets/components/Footer"
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
