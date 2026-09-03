import { Button } from "react-bootstrap"
import type { PropString } from "../misc/types"

const Buttons = ({ string }: PropString) => {
  return (
    <Button variant="buttons" className="rounded-pill fw-semibold text-uppercase py-2">
      <span className="mx-3">{string}</span>
    </Button>
  )
}
export default Buttons
