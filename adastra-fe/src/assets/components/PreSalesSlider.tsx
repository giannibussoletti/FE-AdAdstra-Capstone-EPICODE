import { Row } from "react-bootstrap"
import SingleSlide from "./SliderComponents/SingleSlide"
import SliderButton from "./SliderComponents/SliderButton"
import { arrayPoster } from "../temp"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import MainTitles from "./MainTitles"
import type { PropString } from "../misc/types"
import { useState } from "react"
import { useRef } from "react"
const PreSalesSlider = function ({ string }: PropString) {
  const [newArrayPoster, setNewArrayPoster] = useState(arrayPoster)
  const [animRules, setAnimRules] = useState({})
  const posterRef = useRef<HTMLDivElement>(null)

  const nextslide = () => {
    const posterWidth = posterRef.current?.clientWidth
    setAnimRules({
      transform: `translateX(-${posterWidth}px)`,
      transition: "300ms all ease-in-out",
    })

    setTimeout(() => {
      setNewArrayPoster((prevPosters) => {
        if (prevPosters.length <= 1) return prevPosters

        const [firstSlide, ...remainingSlides] = prevPosters
        return [...remainingSlides, firstSlide]
      })
      setAnimRules({
        transform: `translateX(0)`,
        transition: "none",
      })
    }, 300)
  }

  const previousSlide = () => {
    const posterWidth = posterRef.current?.clientWidth

    setNewArrayPoster((prevPosters) => {
      if (prevPosters.length <= 1) return prevPosters
      const lastSlide = prevPosters[prevPosters.length - 1]
      const remainingSlides = prevPosters.slice(0, -1)
      return [lastSlide, ...remainingSlides]
    })

    setAnimRules({
      transform: `translateX(-${posterWidth}px)`,
      transition: "none",
    })

    setTimeout(() => {
      setAnimRules({
        transform: "translateX(0)",
        transition: "300ms all ease-in-out",
      })
    }, 50)
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
            <div
              className="p-0"
              ref={posterRef}
              style={animRules}
              key={poster.id}
            >
              <SingleSlide
                posterLink={poster.link}
                originalTitle={poster.name}
              />
            </div>
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
