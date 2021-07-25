import './App.css';

import * as fcl from "@onflow/fcl"

fcl.config()
  .put("accessNode.api", "http://localhost:8080")
  .put("challenge.handshake", "http://localhost:8701/flow/authenticate")
// .put("accessNode.api", "https://access-testnet.onflow.org") // Flow testnet
// .put("challenge.handshake", "https://flow-wallet-testnet.blocto.app/authn")

function App() {
  const auth = () => {
    fcl.signUp()
    console.log("Hey there. I just authenticated.")
  }

  return (
    <div className="App">
      <button onClick={auth}>Login</button>
    </div>
  );
}

export default App;
