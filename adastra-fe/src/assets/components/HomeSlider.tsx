import { Carousel } from "react-bootstrap"
import type { JSX } from "react/jsx-runtime"

const HomeSlider = (): JSX.Element => {
  return (
    <>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img className="w-100" src="https://placehold.co/600x400" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src="https://placehold.co/600x400" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src="https://placehold.co/600x400" alt="" />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default HomeSlider
