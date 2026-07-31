import "./assets/custom/custom.scss"
import { library } from "@fortawesome/fontawesome-svg-core"

import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)
import Navbar from "./assets/components/Navbar"
import HomeSlider from "./assets/components/HomeSlider"
import CitySearch from "./assets/components/CitySearch"
import MustSeeMovies from "./assets/components/MustSeeMovies"
const App = () => {
  return (
    <>
      <Navbar />
      <HomeSlider />
      <CitySearch />
      <MustSeeMovies />
    </>
  )
}

export default App
