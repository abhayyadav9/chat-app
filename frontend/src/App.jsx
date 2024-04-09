import './App.css';
import SignUp from './pages/signup/SignUp.jsx';
import { Home } from './pages/home/Home.jsx';
import { Login } from './pages/login/Login.jsx';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {
  const { authUser } = useAuthContext(); // Call useAuthContext to get the authUser value
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* Check if the user is authenticated before rendering the SignUp component */}
        {/* <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} /> */}
      </Routes>
    </div>
  );
}

export default App;
