import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/screens/home/components/Main";
import SingleMainPage from "./components/screens/home/components/SingleMainPage";
import Cart from "./components/screens/home/components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/singlepage/:id" element={<SingleMainPage />} />
          <Route path="/cart/" element={<Cart/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
