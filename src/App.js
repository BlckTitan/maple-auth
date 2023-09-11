import { Toast, ToastContainer } from "react-toastify";
import LoginComponent from "./components/Login";
import SignupComponent from "./components/Signup";
import WelcomeComponent from "./components/Welcome";
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <div className="App w-full h-screen pt-24 lg:pt-0 lg:flex justify-center items-center">
      {/* <WelcomeComponent/> */}
      <SignupComponent/>
      {/* <LoginComponent/> */}
      <ToastContainer/>
    </div>
  );
}

export default App;
