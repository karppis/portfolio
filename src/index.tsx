import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import style from './index.module.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SomeExampleComponent from './components/example/someExampleComponent';
import MyFirstComponent from './components/myFirstComponent';
import Navbar from './components/navbar/navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar></Navbar>
    <Routes>
      <div className={style.body}>
      <Route path='/' element={<App />}></Route>
      <Route path='example' element={<SomeExampleComponent />} />
      <Route path='/first' element={<MyFirstComponent />} />
      </div>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
