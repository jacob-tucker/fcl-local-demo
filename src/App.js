import './App.css';

import * as fcl from "@onflow/fcl"

// prettier-ignore
fcl.config()
  // Point App at Emulator
  .put("accessNode.api", "http://localhost:8080")
  // Point FCL Wallet Discovuer at Dev Wallet
  .put("discovery.wallet", "http://localhost:3000/fcl/authn") // with default port configuration
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
