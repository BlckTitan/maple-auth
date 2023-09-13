import {ToastContainer } from "react-toastify";
import LoginComponent from "./components/Login";
import SignupComponent from "./components/Signup";
import WelcomeComponent from "./components/Welcome";
import 'react-toastify/dist/ReactToastify.css'; 
import { useSelector } from "react-redux";
import HeaderComponent from "./components/Header";

function App() {
  
  const SELECTED_STEP = useSelector((state) => state.userStep.step);
  
  return (
    <>
      <HeaderComponent/>
      <div className="App w-full h-screen pt-24 lg:pt-0 lg:flex justify-center items-center">
        {SELECTED_STEP === 0 && <WelcomeComponent/>}
        {SELECTED_STEP === 1 && <SignupComponent/>}
        {SELECTED_STEP === 2 && <LoginComponent/>}
        <ToastContainer/>
      </div>
    </>
  );
}

export default App;
