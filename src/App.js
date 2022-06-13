import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ImageView from "./pages/imageView/ImageView";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:username/status/:tweet/img/:n" element={<ImageView />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
