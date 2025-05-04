import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            {/* <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />*/}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
