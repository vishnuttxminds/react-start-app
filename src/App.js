import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ShowHideScreen from "./screens/ShowHideScreen";
import ProductCardScreen from "./screens/ProductCardScreen";
import bag1 from "./assets/bag1.jpg";
import bag2 from "./assets/bag2.jpg";
import ProductList from "./screens/ProductList";
import TitleCounter from "./screens/TitleCounter";
import CurrentTime from "./screens/CurrentTime";
import CounterUseRef from "./screens/CounterUseRef";
import ChangeBgColor from "./screens/ChangeBgColor";
import Department from "./screens/Department";
import { useState } from "react";
import Counter from "./screens/Counter";
import CounterContext from "./context/CounterContext";
import UserContext from "./context/UserContext";
import UserProfile from "./screens/UserProfile";
import Chat from "./screens/Chat";

function App() {
  const loggedInEmployee = {
    id: 101,
    name: "Vishnu",
    role: " Developer",
    department: "IT",
  };

  const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };
  return (
    <div className="App">
      {/* <HomeScreen />
      <ShowHideScreen userInfo={{ username: "Vishnu", place: "TVM" }} />

      <ProductCardScreen title="Nike Bag" image={bag1}>
        <p> Price: 7245</p>
        <p> Rating: 4.5</p>
        <p style={{ color: "green" }}>In Stock</p>
      </ProductCardScreen>

      <ProductCardScreen title="Adidas Bag" image={bag2}>
        <p>Price: 17989</p>
        <p>Rating: 4.2</p>
        <p style={{ color: "red" }}>Out of Stock</p>
      </ProductCardScreen> */}

      {/* <ProductList /> */}
      {/* <TitleCounter/>
      <CurrentTime/> */}

      {/* <CounterUseRef/> */}
      {/* <ChangeBgColor/>

      <Department employee={loggedInEmployee} /> */}

      <CounterContext.Provider value={{ count, setCount }}>
        <Counter />
      </CounterContext.Provider>

      <UserContext.Provider value={loggedInEmployee}>
        <UserProfile />
        <Chat />
      </UserContext.Provider>

      
    </div>
  );
}

export default App;
