import {BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css'
import Header from "./components/commons/layout/Header/Header";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header/>
        <Routes>
                  
          <Route path=""/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
