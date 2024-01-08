import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import SideBar from "./components/layout/SideBar";
// import LoginForm from "./components/screens/LoginForm";
// import Login from "./components/screens/Login";
import Login from "./components/Auth/Login";
import Home from "./components/screens/Home";
import StudentForm from "./components/screens/StudentForm";
import Calculator from "./components/screens/Calculator";
import WallClock from "./components/screens/WallClock";
import ForgotPasswordForm from "./components/Auth/ForgotPassword";



// import ThemeToggle from "./ThemeToggle";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   setLoggedIn(true);
  //   navigate("/");
  // };

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <div className="bg-primary1 dark:bg-primary">
          
      <SideBar />
      <Login />
      <ForgotPasswordForm />
      {/* <StudentForm /> */}
      {/* <WallClock /> */}
      <div className="flex justify-center items-center h-screen bg-slate-500">        
        {/* <Calculator /> */}
      </div>
      {/* <Login /> */}
      <Home />
      {/* <Router>
        {loggedIn && <SideBar />}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Router> */}

      {/* <LoginForm /> */}
    </div>
  );
}

export default App;
