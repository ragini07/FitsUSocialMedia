import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import {PrivateRoute,Login ,Signup , Header , Home, Bookmark , Feed,MainContainer, UserProfile,OtherProfile} from './Components'


function App() {
  return (
    <>
  
   
    <Routes>

        <Route path="/" element={
        <PrivateRoute><MainContainer><Home /></MainContainer></PrivateRoute>} />
        <Route path="/feed" element={<PrivateRoute><MainContainer><Feed /></MainContainer></PrivateRoute> } />
        <Route path="/userprofile" element={<PrivateRoute><MainContainer><UserProfile /></MainContainer></PrivateRoute>} />
        <Route path="/otherprofile/:id" element={<PrivateRoute><MainContainer><OtherProfile /></MainContainer></PrivateRoute>} />
        <Route path="/bookmark" element={<PrivateRoute><MainContainer><Bookmark /></MainContainer></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/testApi" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
