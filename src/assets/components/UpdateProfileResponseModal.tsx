import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { fetchUpdateMail, fetchUpdatePsw } from "../fetchs"
import { Button, Modal } from "react-bootstrap"
import { BLUE, MAIL, RED } from "../misc/variables"
import type { UpdateProfileModalType } from "../misc/types"
const UpdateProfileResponseModal = ({
  showConfirmation,
  oldPsw,
  newPsw,
  newMail,
  mailOrPsw,
  handleCloseShowConfirmation,
  setModalData,
  setShow,
}: UpdateProfileModalType) => {
  return (
    <Modal
      show={showConfirmation}
      onHide={() => handleCloseShowConfirmation()}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title as={"h5"}>Update {mailOrPsw}?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Confermi di voler cambiare la {mailOrPsw}?</Modal.Body>
      <Modal.Footer>
        <Button
          variant="buttons"
          onClick={() => {
            handleCloseShowConfirmation()
            const fechtRequest =
              mailOrPsw === MAIL ? fetchUpdateMail : fetchUpdatePsw

            fechtRequest(mailOrPsw === MAIL ? newMail : oldPsw, newPsw)
              .then(() => {
                setModalData({
                  title: "Tutto ok!",
                  message:
                    "la " +
                    mailOrPsw +
                    " è stata aggiornata corretamente, verrai disconesso",
                  icon: faCircleCheck,
                  style: BLUE,
                  buttonText: "torna ai dettagli",
                })
                setShow(true)
              })
              .catch(() => {
                setModalData({
                  title: "Ops!",
                  message: "C'è stato un errore nell'aggiornamento",
                  icon: faCircleXmark,
                  style: RED,
                  buttonText: "Riprova",
                })
                setShow(true)
              })
          }}
        >
          Confermo
        </Button>
        <Button variant="buttons" onClick={() => handleCloseShowConfirmation()}>
          Ci ho ripensato
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdateProfileResponseModal
