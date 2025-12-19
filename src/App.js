import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ShowHideScreen from "./screens/ShowHideScreen";

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <ShowHideScreen userInfo={{ name: "Vishnu", place: "TVM" }} />
    </div>
  );
}

export default App;
