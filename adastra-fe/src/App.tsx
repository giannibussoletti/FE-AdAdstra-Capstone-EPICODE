import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import { library } from "@fortawesome/fontawesome-svg-core"

import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fas, far, fab)
import type { JSX } from "react/jsx-runtime"
import Navbar from "./assets/components/Navbar"

const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
    </>
  )
}

export default App
