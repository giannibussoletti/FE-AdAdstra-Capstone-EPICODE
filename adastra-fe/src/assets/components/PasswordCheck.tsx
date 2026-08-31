import { Form, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const checkOk = (
  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
)
const checkNotOk = (
  <FontAwesomeIcon icon={faCircleXmark} style={{ color: "red" }} />
)

function PasswordCheck({ checking }: { checking: string }) {
  return (
    <Row>
      <Col className=" d-flex flex-column mt-4">
        <Form.Label>
          {checking && checking.length >= 12 ? checkOk : checkNotOk} minimo 12
          caratteri
        </Form.Label>
        <Form.Label>
          {checking && /[A-Z]/.test(checking) ? checkOk : checkNotOk} minino 1
          carattere maiuscolo
        </Form.Label>
        <Form.Label>
          {checking && /[a-z]/.test(checking) ? checkOk : checkNotOk} minino 1
          carattere minuscolo
        </Form.Label>
        <Form.Label>
          {checking && /[0-9]/.test(checking) ? checkOk : checkNotOk} minimo un
          numero
        </Form.Label>
        <Form.Label>
          {checking && /[@$!%*?&]/.test(checking) ? checkOk : checkNotOk} almeno
          un carattere speciale: @ $ ! % * ? &
        </Form.Label>
        <Form.Label>
          {checking && /[^a-zA-Z0-9@$!%*?&]/.test(checking)
            ? checkNotOk
            : checkOk}{" "}
          nessun altro carattere speciale
        </Form.Label>
      </Col>
    </Row>
  )
}

export default PasswordCheck
