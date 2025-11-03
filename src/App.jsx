import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
