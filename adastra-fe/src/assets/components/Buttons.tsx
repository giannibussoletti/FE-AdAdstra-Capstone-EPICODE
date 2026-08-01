import { Button } from "react-bootstrap"
import type { propString } from "../types"

const Buttons = ({ string }: propString) => {
  return (
    <Button
      variant="buttons"
      className="rounded-pill fw-semibold text-uppercase py-2"
    >
      <span className="mx-3">{string}</span>
    </Button>
  )
}
export default Buttons
