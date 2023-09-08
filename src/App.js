import SignupComponent from "./components/Signup";
import WelcomeComponent from "./components/Welcome";

function App() {
  return (
    <div className="App w-full h-screen pt-24 lg:pt-0 lg:flex justify-center items-center">
      {/* <WelcomeComponent/> */}
      <SignupComponent/>
    </div>
  );
}

export default App;
