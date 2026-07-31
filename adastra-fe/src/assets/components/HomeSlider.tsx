import { Carousel } from "react-bootstrap"
// TODO da cancellare una volta fatta la fetch per richiamare le immagini dal DB
const arrayMapImg: string[] = [
  "https://placehold.co/600x300",
  "https://placehold.co/600x300",
  "https://placehold.co/600x300",
]
const randomNum: number = Math.ceil(Math.random() * 1200)

const HomeSlider = () => {
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
