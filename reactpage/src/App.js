import {BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css'
import Header from "./components/commons/layout/Header/Header";
import Movie from "./pages/Movie/Movie";
import TV from "./pages/TV";
import Program from "./pages/Program";
import Human from "./pages/Human";
import Home from "./pages/Home";


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header/>
        <Routes>      
          <Route path="/" element={<Home />} />
          <Route path="/Movie" element={<Movie />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Program" element={<Program />} />
          <Route path="/Human" element={<Human />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
