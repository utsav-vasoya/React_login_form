import './App.css';
import Signup from './components/forms/Signup';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/forms/Login';
import HomePage from './components/forms/HomePage';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
function App() {
  const navigate = useNavigate()
  useEffect(() => {
    let token = Cookies.get('name')
    if (!token) {
      navigate('/login')
    }
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
