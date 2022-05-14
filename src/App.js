import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import {Login ,Signup , Header , Home, Bookmark , Feed,MainContainer, UserProfile,OtherProfile} from './Components'


function App() {
  return (
    <>
  
   
    <Routes>

        <Route path="/" element={
        <MainContainer><Home /></MainContainer>} />
        <Route path="/feed" element={ <MainContainer><Feed /></MainContainer>} />
        <Route path="/userprofile" element={<MainContainer><UserProfile /></MainContainer>} />
        <Route path="/otherprofile" element={<MainContainer><OtherProfile /></MainContainer>} />
        <Route path="/bookmark" element={<MainContainer><Bookmark /></MainContainer>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/testApi" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
