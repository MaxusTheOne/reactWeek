

import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo1 from "./exercises/FetchDemo";


export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }


  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView === "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView === "props1" ? <PropsDemo title="Props1" /> : null}
            {selectedView === "props2" ? <ListDemo title="List Demo" /> : null}
            {selectedView === "props3" ? <EventDemo title="Event Demo" /> : null}
            {selectedView === "props4" ? <FormUncontrolled title="Form Uncontrolled" /> : null}
            {selectedView === "state1" ? <StateDemo1 title="State Demo a" /> : null}
            {selectedView === "state2" ? <StateDemo2 title="State Demo b" /> : null}
            {selectedView === "state3" ? <StateDemo3 title="State Demo c" /> : null}
            {selectedView === "effect" ? <UseEffectDemo title="Use effect" /> : null}
            {selectedView === "effectFetch" ? <FetchDemo1 title="Use Fetch" /> : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props2")}>
        List Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props3")}>
        Event Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props4")}>
        Form Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state1")}>
        State Demo a
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state2")}>
        State Demo b
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state3")}>
        State Demo c
      </button>
      <button className="btn-w100" onClick={() => handleSelected("effect")}>
        Use Effect
      </button>
      <button className="btn-w100" onClick={() => handleSelected("effectFetch")}>
        Use fetch
      </button>
    </>
  );
};
