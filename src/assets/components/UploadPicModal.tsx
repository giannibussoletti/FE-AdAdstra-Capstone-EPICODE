import { Button, Form, Modal, Image } from "react-bootstrap"
import type { UploadProPicType } from "../misc/types"
import { useState } from "react"
import { fetchUpdateProPic } from "../fetchs"
import { useAppDispatch } from "../redux/hooks"
import { setProPicLink } from "../redux/reducers/UserSlice"
const UploadPicModal = ({
  modalPicShow,
  handleCloseModalPic,
}: UploadProPicType) => {
  const [localPath, setLocalPath] = useState<FileList | null>()
  const dispatch = useAppDispatch()
  return (
    <Modal
      show={modalPicShow}
      onHide={() => handleCloseModalPic()}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title as={"h5"}>Nuova immagine</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {localPath && (
          <Image
            className="mb-3 w-100"
            src={URL.createObjectURL(localPath[0])}
          />
        )}
        <Form.Control
          type="file"
          onChange={(e) => setLocalPath((e.target as HTMLInputElement).files)}
          accept="image/*"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="buttons"
          onClick={() =>
            localPath &&
            fetchUpdateProPic(localPath)
              .then((data) => {
                dispatch(setProPicLink(data.imageLink))
                handleCloseModalPic()
                setLocalPath(null)
              })
              .catch((err) => console.log(err))
          }
        >
          Invia
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UploadPicModal
