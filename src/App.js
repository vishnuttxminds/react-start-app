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
import { useCallback, useState } from "react";
import CounterContext from "./context/CounterContext";
import UserContext from "./context/UserContext";
import UserProfile from "./screens/UserProfile";
import Chat from "./screens/Chat";
import Button from "./screens/Button";
import Counter2 from "./screens/Counter2";
import CountMemo from "./screens/CountMemo";
import ProductListWithCallback from "./screens/ECom/ProductListWithCallback";
import ProductListWithoutCallback from "./screens/ECom/ProductListWithoutCallback";
import CounterWithMemo from "./screens/useMemo/CounterWithMemo";
import Counter from "./screens/Reducer/Counter";
import Cart from "./screens/eCart/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  const loggedInEmployee = {
    id: 101,
    name: "Vishnu",
    role: " Developer",
    department: "IT",
  };

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(2);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  //  const increment1 = () => {
  //   setCount1(count1 + 1);
  // };

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const increment1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  return (
    // <div className="App">
    //   {/* <HomeScreen />
    //   <ShowHideScreen userInfo={{ username: "Vishnu", place: "TVM" }} />

    //   <ProductCardScreen title="Nike Bag" image={bag1}>
    //     <p> Price: 7245</p>
    //     <p> Rating: 4.5</p>
    //     <p style={{ color: "green" }}>In Stock</p>
    //   </ProductCardScreen>

    //   <ProductCardScreen title="Adidas Bag" image={bag2}>
    //     <p>Price: 17989</p>
    //     <p>Rating: 4.2</p>
    //     <p style={{ color: "red" }}>Out of Stock</p>
    //   </ProductCardScreen> */}

    //   {/* <ProductList /> */}
    //   {/* <TitleCounter/>
    //   <CurrentTime/> */}

    //   {/* <CounterUseRef/> */}
    //   {/* <ChangeBgColor/>

    //   <Department employee={loggedInEmployee} /> */}

    //   {/* <CounterContext.Provider value={{ count, setCount }}>
    //     <Counter />
    //   </CounterContext.Provider>

    //   <UserContext.Provider value={loggedInEmployee}>
    //     <UserProfile />
    //     <Chat />
    //   </UserContext.Provider> */}

    //   {/* <div style={{ padding: "20px" }}>
    //     <Counter2 text="Counter Component 1" count={count} />
    //     <Counter2 text="Counter Component 2" count={count1} />

    //     <Button onIncrement={increment} />

    //     <Button onIncrement={increment1} />
    //   </div> */}

    //   <div style={{ padding: "20px" }}>
    //      {/* <CountMemo /> */}
    //     {/* <ProductListWithCallback /> */}
    //     {/* <ProductListWithoutCallback /> */}
    //     {/* <CounterWithMemo /> */}
    //     {/* <Counter/> */}
    //     <Cart />
    //   </div>
    // </div>

    <>
      <Routes>
        <Route path="/" element={<ProductListWithCallback />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ProductListWithout" element={<ProductListWithoutCallback />} />
      </Routes>
    </>
  );
}

export default App;
