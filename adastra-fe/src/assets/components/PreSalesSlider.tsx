import { Row } from "react-bootstrap"
import SingleSlide from "./SliderComponents/SingleSlide"
import SliderButton from "./SliderComponents/SliderButton"
import { arrayPoster } from "../temp"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import MainTitles from "./MainTitles"
import type { PropString } from "../misc/types"
const PreSalesSlider = function ({ string }: PropString) {
  return (
    <Row className="position-relative mt-3">
      <MainTitles string={string} />
      <Row
        xs={2}
        lg={3}
        xxl={5}
        className="smooth-carousel flex-nowrap overflow-scroll hiding-bar p-0 m-0"
      >
        {arrayPoster.map((linkPoster) => {
          return (
            <SingleSlide
              //Cambiare il tipo di key e la uniqueId
              key={linkPoster.date.toDateString() + linkPoster.link}
              uniqueId={linkPoster.date.toDateString()}
              posterLink={linkPoster.link}
              originalTitle={linkPoster.name}
            />
          )
        })}
        <SliderButton
          arrowDirection="right"
          arrowDirectionIcon={faAngleRight}
          arrowPosition="end"
        />
        <SliderButton
          arrowDirection="left"
          arrowDirectionIcon={faAngleLeft}
          arrowPosition="start"
        />
      </Row>
    </Row>
  )
}

export default PreSalesSlider
