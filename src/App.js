import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
    </div>
  );
}

export default App;
