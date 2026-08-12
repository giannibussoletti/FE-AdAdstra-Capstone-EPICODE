import { Tab, Tabs, Row, Col } from "react-bootstrap"
import { useAppDispatch } from "../redux/hooks"
import { dateChoice } from "../redux/reducers/MovieSlice"
import MovieStartTime from "./MovieStartTime"
const TimeTabs = () => {
  const dispatch = useAppDispatch()

  const lunedì = new Date(2026, 7, 17).toLocaleDateString()
  const martedì = new Date(2026, 7, 18).toLocaleDateString()
  const mercoledì = new Date(2026, 7, 19).toLocaleDateString()
  const giovedì = new Date(2026, 7, 20).toLocaleDateString()
  const venerdì = new Date(2026, 7, 21).toLocaleDateString()
  const sabato = new Date(2026, 7, 22).toLocaleDateString()
  const domenica = new Date(2026, 7, 23).toLocaleDateString()

  return (
    <Tabs
      defaultActiveKey={lunedì}
      id="uncontrolled-tab-example"
      className="mb-3"
      onSelect={(selectedKey) => {
        if (selectedKey) {
          dispatch(dateChoice({ date: selectedKey }))
        }
      }}
    >
      <Tab eventKey={lunedì} title="lunedì">
        <Row xs={1} md={4} lg={5} xxl={6} className="mt-4">
          <Col className="px-2 pb-3 cursor-pointer">
            <MovieStartTime />
          </Col>
        </Row>
      </Tab>

      <Tab eventKey={martedì} title="martedì">
        <Row xs={1} md={4} lg={5} xxl={6} className="mt-4">
          <Col className="px-2 pb-3 cursor-pointer">
            <MovieStartTime />
          </Col>
        </Row>
      </Tab>

      <Tab eventKey={mercoledì} title="mercoledì">
        <Row xs={1} md={4} lg={5} xxl={6} className="mt-4">
          <Col className="px-2 pb-3 cursor-pointer">
            <MovieStartTime />
          </Col>
        </Row>
      </Tab>

      <Tab eventKey={giovedì} title="giovedì">
        <Row xs={1} md={4} lg={5} xxl={6} className="mt-4">
          <Col className="px-2 pb-3 cursor-pointer">
            <MovieStartTime />
          </Col>
        </Row>
      </Tab>

      <Tab eventKey={venerdì} title="venerdì">
        <Row xs={1} md={4} lg={5} xxl={6} className="mt-4">
          <Col className="px-2 pb-3 cursor-pointer">
            <MovieStartTime />
          </Col>
        </Row>
      </Tab>

      <Tab eventKey={sabato} title="sabato">
        <Row xs={1} md={4} lg={5} xxl={6} className="mt-4">
          <Col className="px-2 pb-3 cursor-pointer">
            <MovieStartTime />
          </Col>
        </Row>
      </Tab>

      <Tab eventKey={domenica} title="domenica">
        <Row xs={1} md={4} lg={5} xxl={6} className="mt-4">
          <Col className="px-2 pb-3 cursor-pointer">
            <MovieStartTime />
          </Col>
        </Row>
      </Tab>
    </Tabs>
  )
}
export default TimeTabs
