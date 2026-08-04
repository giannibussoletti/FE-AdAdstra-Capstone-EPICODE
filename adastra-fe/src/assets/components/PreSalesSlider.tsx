import { Row } from "react-bootstrap"
import SingleSlide from "./SliderComponents/SingleSlide"
import SliderButton from "./SliderComponents/SliderButton"
import { arrayPoster } from "../temp"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import MainTitles from "./MainTitles"
import type { PropString } from "../misc/types"
import { useState } from "react"
const PreSalesSlider = function ({ string }: PropString) {
  const [newArrayPoster, setNewArrayPoster] = useState(arrayPoster)

  const nextslide = () => {
    setNewArrayPoster((prevPosters) => {
      if (prevPosters.length <= 1) return prevPosters

      const newArray = [...prevPosters]
      const firstSlide = prevPosters.shift()
      if (firstSlide) {
        newArray.push(firstSlide)
        newArray.shift()
      }
      return newArray
    })
  }

  const previousSlide = () => {
    setNewArrayPoster((prevPosters) => {
      if (prevPosters.length <= 1) return prevPosters

      const newArray = [...prevPosters]
      const lastSlide = prevPosters.pop()
      if (lastSlide) {
        newArray.unshift(lastSlide)
        newArray.pop()
      }

      return newArray
    })
  }

  return (
    <Row className="position-relative">
      <MainTitles string={string} />
      <Row
        xs={2}
        lg={3}
        xxl={5}
        className="smooth-carousel flex-nowrap overflow-scroll hiding-bar p-0 m-0"
      >
        {newArrayPoster.map((poster) => {
          return (
            <SingleSlide
              //Cambiare il tipo di key e la uniqueId
              key={poster.id}
              posterLink={poster.link}
              originalTitle={poster.name}
            />
          )
        })}
        <SliderButton
          arrowDirection="right"
          arrowDirectionIcon={faAngleRight}
          arrowPosition="end"
          arrowFunction={nextslide}
        />
        <SliderButton
          arrowDirection="left"
          arrowDirectionIcon={faAngleLeft}
          arrowPosition="start"
          arrowFunction={previousSlide}
        />
      </Row>
    </Row>
  )
}

export default PreSalesSlider
