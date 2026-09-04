import { Card } from "react-bootstrap"
import type { InfoCardAndDesktopNav } from "../misc/types"
const CardMoreInfo = ({ label, link }: InfoCardAndDesktopNav) => {
  return (
    <Card className="border-0 card-info">
      <Card.Img src={link} alt={"immagine " + label} />
      <Card.ImgOverlay className="p-0">
        <Card.Title className="pb-3 ps-4 d-flex h-100 m-0 align-items-end fw-normal text-uppercase text-white card-info-bg">
          {label}
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  )
}

export default CardMoreInfo
