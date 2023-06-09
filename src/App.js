import Header from 'components/Header/Index';
import './App.css';
import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import { Provider } from 'react-redux';
import store from 'redux/store';

function App() {
  // const [msg, setMsg] = useState([]);
  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then((res) => {return res.json();})
  //     .then((data) => {setMsg(data);})
  // }, []);

  const [winWidth, setWinWidth] = useState(window.innerWidth)

  let isMo = winWidth <= 768
  // let isTab = winWidth <= 1024
  // let isPc = winWidth > 1024
  const handleResize = () => setWinWidth(window.innerWidth)
  
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Provider store={store}>
      <div className="wrap">
        <Header isMo={isMo} />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;