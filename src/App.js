import "./App.scss";
import Allbook from "./components/Allbook/Allbook";
import Choice from "./components/Choice/Choice";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Choice />
      <Allbook />
      <List />
    </div>
  );
}

export default App;
