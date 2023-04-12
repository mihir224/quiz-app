import './App.css';
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
