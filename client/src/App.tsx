import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Utils/Auth";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route element={<Auth />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<h2>404 page not found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
