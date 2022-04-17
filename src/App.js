import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import {Login ,Signup , Header} from './Components'


function App() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Header/>
    <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/testApi" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
