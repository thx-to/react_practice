import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoreList from './components/StoreList';
import StoreDetail from './components/StoreDetail';
import Reservation from './components/Reservation';

function App
() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StoreList />} />
        <Route path="/stores/:storeNo" element={<StoreDetail />} />
        <Route path="/stores/:storeNo/reservations" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
