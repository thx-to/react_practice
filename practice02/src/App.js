import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserStore from "./context/UserStore";
import Login from "./pages/mypage/Login";
import Signup from "./pages/mypage/Signup";
import StoreList from "./pages/stores/StoreList";
import StoreDetail from "./pages/stores/StoreDetail";
import Reservation from "./pages/stores/Reservation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/stores" element={<StoreList />} />
        <Route path="/stores/:storeNo" element={<StoreDetail />} />
        <Route path="/stores/:storeNo/reservations" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
