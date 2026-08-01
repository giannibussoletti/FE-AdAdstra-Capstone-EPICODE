import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { ArrowSlider } from "../../types"

const SliderButton = function ({
  arrowPosition,
  arrowDirection,
  arrowDirectionIcon,
}: ArrowSlider) {
  const buttonSliderClass =
    "p-0 position-absolute top-0 text-end h-100 d-flex align-items-center"

  return (
    <span
      onClick={(e) => {
        const targetCarousel =
          e.currentTarget.closest<HTMLElement>(".smooth-carousel")
        if (!targetCarousel) {
          return
        }

        if (arrowDirection === "right") {
          targetCarousel.scrollBy(targetCarousel.offsetWidth, 0)
        } else {
          targetCarousel.scrollBy(-targetCarousel.offsetWidth, 0)
        }
      }}
      style={{ width: "10%" }}
      className={
        "arrow-" +
        arrowDirection +
        " " +
        arrowPosition +
        "-0 " +
        buttonSliderClass +
        " justify-content-" +
        arrowPosition
      }
    >
      <FontAwesomeIcon
        icon={arrowDirectionIcon}
        className={"arrow-" + arrowDirection + "-bg"}
        size="2x"
        style={{
          color: "rgb(255, 255, 255)",
          width: "50px",
          height: "25px",
          lineHeight: "1.5em",
        }}
      />
    </span>
  )
}

export default SliderButton
