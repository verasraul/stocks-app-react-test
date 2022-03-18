import './App.css';
import GetTicker from "./components/GetTicker";
import TickerSearch from "./components/TickerSearch";

function App() {
  return (
    <div className="App">
      Search for Ticker:
      <TickerSearch  />
      <GetTicker />
    </div>
  );
}

export default App;
