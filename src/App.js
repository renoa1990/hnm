import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./page/Login"
import ProductDetail from "./page/ProductDetail"
import ProductAll from './page/ProductAll';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1.페이지 전체상품페이지, 로그인, 상품 상세페이지
//2.전체 상품페이지는 전체 상품을 볼수있다
//3.로그인 버튼을 누르면 로그인 페이지가 나온다
//4.상품디테일을 눌렀을때 로그인이 안됬을경우 로그인 페이지가 먼저 나온다
//5.로그인이 되어있을경우에는 디테일 페이지를 볼수있다
//6.로그아웃 버튼을 누르면 로그아웃이 된다
//7.상품을 검색할수 있다

function App() {
  const [authenticate,setAuthenticate] = useState(false);
  const Navigate = useNavigate();

  useEffect(() =>{
    console.log("유저정보 변경", authenticate)
    Navigate('/')
    console.log("유저로그인상태")
  },[authenticate])


  return (
    <div>
      <Navbar authenticate ={authenticate} />
       <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate = {setAuthenticate}/>}  />
        <Route path="/Product/:id" element={<PrivateRoute authenticate ={authenticate}/>} />
      </Routes>     
    </div>
  );
}


export default App;
