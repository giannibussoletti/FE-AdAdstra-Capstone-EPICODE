import { Card } from "react-bootstrap"
import type { MoreInfoCard } from "../misc/types"
const CardMoreInfo = ({ label, imgLink }: MoreInfoCard) => {
  return (
    <Card className="border-0 card-info">
      <Card.Img src={imgLink} alt="Card image" />
      <Card.ImgOverlay className="p-0">
        <Card.Title className="pb-3 ps-4 d-flex h-100 m-0 align-items-end fw-normal text-uppercase text-white card-info-bg">
          {label}
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  )
}

export default CardMoreInfo
