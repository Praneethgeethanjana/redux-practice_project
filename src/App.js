import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Dash from "./components/dash/Dash";
import { useState } from "react/cjs/react.development";



function App() {
  const [screenIndex,setScreenIndex]= useState(1);

  return (
 
    <div className="App">
        {
           screenIndex === 1 ? <Login setScreenIndex={setScreenIndex}/> : screenIndex === 2 ? <SignUp setScreenIndex={setScreenIndex}/> : <Dash setScreenIndex={setScreenIndex} />
        }
    </div>
  
  );
}

export default App;
