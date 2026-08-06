import { Card, Col, Row } from "react-bootstrap"
import type { Poster } from "../misc/types"
import Buttons from "./Buttons"
import { useLocation } from "react-router"
const CardMovieDetails = ({ id, name, link, date, time }: Poster) => {
  const location = useLocation()

  return (
    <>
      <Card className="rounded-0 bg-transparent text-light d-md-block">
        <Row xs={1} md={2}>
          <Col>
            <Card.Img className="rounded-0" src={link} />
          </Col>

          <Col>
            <Card.Body className="p-0 text-center text-md-start">
              <Card.Title className="m-0 ">
                <h3 className="m-0 p-0 text-uppercase w-100">{name}</h3>
              </Card.Title>

              <Card.Text className="m-0 p-0 date-and-time">
                {date.toLocaleDateString("it-IT") + " " + time + "h"}
              </Card.Text>

              <Card.Text
                className={
                  location.pathname === "/details/" + id
                    ? "d-block text-start mt-2"
                    : "d-none d-md-block text-start mt-2 "
                }
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus iusto consequuntur quis fugit nam vel corporis
                cumque consectetur architecto? Ut fugiat molestias consectetur
                dolor expedita sequi aliquid. Veritatis, maxime sapiente? Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                rerum sint, id consequuntur doloremque porro obcaecati
                accusantium neque minima ad dolore mollitia provident dicta
                dignissimos blanditiis consectetur. Earum, pariatur aliquid!
              </Card.Text>
              {location.pathname === "/details/" + id ? (
                ""
              ) : (
                <div className="mt-4 d-none d-md-inline-block">
                  <Buttons string={"acquista biglietto"} />
                </div>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  )
}
export default CardMovieDetails
