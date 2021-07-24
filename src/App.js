import './App.css';

import * as fcl from "@onflow/fcl"

fcl.config()
  .put("challenge.handshake", "http://localhost:8701/flow/authenticate")

function App() {
  return (
    <div className="App">
      <button onClick={() => fcl.authenticate()}>Login</button>
    </div>
  );
}

export default App;
