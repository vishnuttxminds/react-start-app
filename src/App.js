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
import { Route, Routes, Link, Navigate  } from "react-router-dom";
import NoMatch from "./screens/NoMatch";
import ProductDetails from "./screens/ProductDetails";
import Login from "./screens/Login";
import AuthProvider from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";

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
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
