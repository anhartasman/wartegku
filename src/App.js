import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="Udin" heroName="Batman">
        This is the children props
      </Greet>
      <Greet name="Asep" heroName="Superman" />
      <Greet name="Budi" heroName="Wonder Woman" />
      <Welcome name="Udin" heroName="Batman" />
      <Welcome name="Asep" heroName="Superman" />
      <Welcome name="Budi" heroName="Wonder Woman" />
      {/* <Hello /> */}
    </div>
  );
}

export default App;
