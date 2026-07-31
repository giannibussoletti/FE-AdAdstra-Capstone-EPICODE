import { Carousel } from "react-bootstrap"
import type { JSX } from "react/jsx-runtime"
// TODO da cancellare una volta fatta la fetch per richiamare le immagini dal DB
import { arrayMapImg, randomNum } from "../temp"

const HomeSlider = (): JSX.Element => {
  return (
    <>
      <Carousel controls={false} indicators={false}>
        {arrayMapImg.map((img) => {
          return (
            <Carousel.Item key={randomNum.toString()}>
              <img className="w-100" src={img} alt="" />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </>
  )
}

export default HomeSlider
