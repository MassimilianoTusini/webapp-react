import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail"

function App() {


  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:id" element={<MovieDetail/>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
