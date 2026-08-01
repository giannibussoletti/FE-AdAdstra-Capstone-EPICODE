import type { propString } from "../types"

const MainTitles = ({ string }: propString) => {
  return (
    <>
      <h2 className="mb-4">
        <span className="underline-gradient">{string}</span>
      </h2>
    </>
  )
}

export default MainTitles
