import type { PropString } from "../misc/types"

const MainTitles = ({ string }: PropString) => {
  return (
    <h2 className="mb-4 mt-3 p-0 montserrat-family fw-bold">
      <span className="underline-gradient">{string}</span>
    </h2>
  )
}

export default MainTitles
