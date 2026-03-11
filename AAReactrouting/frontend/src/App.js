import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import "./App.css";
import Home from "./pages/Home"
import Users from "./pages/Users"
import UserDetail from "./pages/UserDetail"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App