import Header from "./components/header/Header";
import Rules from "./pages/rules/Rules";
import PuzzlePage from "./pages/puzzlepage/PuzzlePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<PuzzlePage />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
