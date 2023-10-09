import { selectIsConnectedToRoom, useHMSStore } from "@100mslive/react-sdk";
import "./App.css";
import JoinRoom from "./JoinRoom";
import Room from "./Room";
import "./styles.css";

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);

  return (
    <div className="App wrapper">{isConnected ? <Room /> : <JoinRoom />}</div>
  );
}

export default App;
