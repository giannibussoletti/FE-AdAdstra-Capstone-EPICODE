import { Tab, Tabs } from "react-bootstrap"
import { useAppDispatch } from "../redux/hooks"
import { dateChoice } from "../redux/reducers/MovieSlice"
const TimeTabs = () => {
  const dispatch = useAppDispatch()

  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab
        onSelect={() => dispatch(dateChoice("lunedi"))}
        eventKey="home"
        title="Home"
      >
        lunedi
      </Tab>

      <Tab
        onSelect={() => dispatch(dateChoice("martedì"))}
        eventKey="martedì"
        title="martedì"
      >
        martedì
      </Tab>

      <Tab
        onSelect={() => dispatch(dateChoice("mercoledì"))}
        eventKey="mercoledì"
        title="mercoledì"
      >
        mercoledì
      </Tab>

      <Tab
        onSelect={() => dispatch(dateChoice("giovedì"))}
        eventKey="giovedì"
        title="giovedì"
      >
        giovedì
      </Tab>

      <Tab
        onSelect={() => dispatch(dateChoice("venerdì"))}
        eventKey="venerdì"
        title="venerdì"
      >
        venerdì
      </Tab>

      <Tab
        onSelect={() => dispatch(dateChoice("sabato"))}
        eventKey="sabato"
        title="sabato"
      >
        sabato
      </Tab>

      <Tab
        onSelect={() => dispatch(dateChoice("domenica"))}
        eventKey="domenica"
        title="domenica"
      >
        domenica
      </Tab>
    </Tabs>
  )
}
export default TimeTabs
