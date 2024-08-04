import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Orders from "./components/Orders";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Login/>} />
        <Route path={'/register'} element={<Register/>} />
        <Route path={'/home'} element={<Home/>}>
          <Route path={''} element={<Product/>}/>
          <Route path={'orders'} element={<Orders/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
