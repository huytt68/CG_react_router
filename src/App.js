import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Orders from "./components/Orders";
import Product from "./components/Product";
import Admin from "./pages/Admin";
import Students from "./components/Students";
import DetailStudent from "./components/DetailStudent";
import AddStudent from "./components/AddStudent";
import Users from "./components/Users";

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
        <Route path={'/admin'} element={<Admin/>}>
          <Route path={''} element={<Product/>}/>
          <Route path={'users'} element={<Users/>}/>
          <Route path={'students'} element={<Students/>}/>
          <Route path={'students/detail/:id'} element={<DetailStudent/>}/>
          <Route path={'students/add'} element={<AddStudent/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
