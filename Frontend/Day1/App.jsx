import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';
import Dash from './Components/Dash';
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Dash" element={<Dash/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
