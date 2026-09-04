import { Col, Row } from "react-bootstrap"
import type { UserMovies } from "../fetchs/fetchTypes"
import { isAddingZero } from "../misc/functions"
import QRCode from "react-qr-code"
const TicketUserProfile = ({ details }: { details: UserMovies }) => {
  const hours = new Date(details.screeningDate).getHours()
  const minutes = new Date(details.screeningDate).getMinutes()

  return (
    <Row
      xs={1}
      style={{ maxWidth: "250px" }}
      className="profile-ticket bg-body text-black rounded-3 px-3 py-4 h-100">
      <h5 className="ticket-movie-title">{details.title}</h5>
      <Col>
        Sala <span>{details.theater}</span>
      </Col>
      <Col>
        Posto <span>{details.seat}</span>
      </Col>
      <Col>
        data <span>{new Date(details.screeningDate).toLocaleDateString()}</span>
      </Col>
      <Col>
        orario{" "}
        <span>
          {isAddingZero(hours)}:{isAddingZero(minutes)}
        </span>
      </Col>
      <Col className="d-flex justify-content-center mt-auto">
        <QRCode size={150} value={self.crypto.randomUUID()} />
      </Col>
    </Row>
  )
}

export default TicketUserProfile
