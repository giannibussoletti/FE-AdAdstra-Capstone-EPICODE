import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Modal, Button } from "react-bootstrap"
import type { ModalInfo } from "../misc/types"
import { BLUE, RED } from "../misc/variables"
import { useNavigate } from "react-router"
const ResponseModal = ({
  message,
  title,
  show,
  handleClose,
  icon,
  style,
  buttonText,
}: ModalInfo) => {
  const navigate = useNavigate()

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title as={"h5"}>
          <FontAwesomeIcon icon={icon} style={{ color: style }} size="sm" />
          {"    " + title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button
          variant="buttons"
          onClick={() => {
            if (style === RED || style === BLUE) {
              handleClose()
            } else {
              navigate("/")
            }
          }}
        >
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ResponseModal
