import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset';
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [count, setCount] = useState(0)

    return (
      <Router>
<div>

    <Routes>
        <Route>
        <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/reset" element={<Reset />} />
            <Route path="*" element={<NotFound/>} />
        </Route>
    </Routes>

</div>
      </Router>
  )
}

export default App
