
import Board from "./components/board/Board";
import Header from "./components/header/Header";
import Rules from "./pages/rules/Rules";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
    <BrowserRouter >
    <Routes>
      <Route path = "/" element = {<Board />} />
      <Route path = "/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
