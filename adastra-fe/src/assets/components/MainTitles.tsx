import type { PropString } from "../types"

const MainTitles = ({ string }: PropString) => {
  return (
    <>
      <h2 className="mb-4">
        <span className="underline-gradient">{string}</span>
      </h2>
    </>
  )
}

export default MainTitles
