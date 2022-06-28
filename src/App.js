import logo from "./logo.svg";
import "./App.css";
import Expandable from "./components/Expandable";

import Header from "./components/Header";
import Body from "./components/Body";
import Icon from "./components/Icon";
function App() {
  const onExpanded = () => {
    console.log("Expanded");
  };
  return (
    <div className="App">
      <div className="App">
        <Expandable onExpand={onExpanded}>
          <Header style={{color: 'red', border: '1px solid black'}}>React hooks</Header>
          <Icon />
          <Body>Hooks are awesome</Body>
        </Expandable>
      </div>
    </div>
  );
}

export default App;
