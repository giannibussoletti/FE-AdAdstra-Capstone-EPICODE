import { Card } from "react-bootstrap"
import type { UserMovies } from "../fetchs/fetchTypes"
import { isAddingZero } from "../misc/functions"
const TicketUserProfile = (details: UserMovies) => {
  const hours = new Date(details.screeningDate).getHours()
  const minutes = new Date(details.screeningDate).getMinutes()

  return (
    <Card style={{ maxWidth: "300px" }} className="profile-ticket">
      <Card.Body className=" bg-body text-black rounded-3">
        <Card.Title className="ticket-movie-title">{details.title}</Card.Title>
        <Card.Text>
          <p>
            Sala <span>{details.theater}</span>
          </p>
          <p>
            Posto <span>{details.seat}</span>
          </p>
          <p>
            data <span>{new Date(details.screeningDate).toLocaleDateString()}</span>
          </p>
          <p>
            orario{" "}
            <span>
              {isAddingZero(hours)}:{isAddingZero(minutes)}
            </span>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TicketUserProfile
