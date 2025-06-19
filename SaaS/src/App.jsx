
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import "./App.css";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>}></Route>
          <Route path="pricing" element={<Pricing/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
