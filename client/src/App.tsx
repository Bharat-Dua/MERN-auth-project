import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

const App = () => {
  return (
    <div>
      <Login />
      <Signup />
      <ForgetPassword />
      <Home />
    </div>
  );
};

export default App;
