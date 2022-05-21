import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {PrivateRoute,Login,PostModal ,Signup,ProfileModal ,NotFound, Header , Home, Bookmark , Feed,MainContainer, UserProfile,OtherProfile} from './Components'


function App() {
  return (
    <>
     <ToastContainer
        position="bottom-right"
        toastStyle={{ backgroundColor: "rgb(65, 61, 61)", color: "white" }}
        autoClose={3000}
      />
  
  <ProfileModal />
  <PostModal />
    <Routes>

        <Route path="/" element={
        <PrivateRoute><MainContainer><Home /></MainContainer></PrivateRoute>} />
        <Route path="/feed" element={<PrivateRoute><MainContainer><Feed /></MainContainer></PrivateRoute> } />
        <Route path="/userprofile" element={<PrivateRoute><MainContainer><UserProfile /></MainContainer></PrivateRoute>} />
        <Route path="/otherprofile/:id" element={<PrivateRoute><MainContainer><OtherProfile /></MainContainer></PrivateRoute>} />
        <Route path="/bookmark" element={<PrivateRoute><MainContainer><Bookmark /></MainContainer></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<MainContainer><NotFound /></MainContainer> } />
      </Routes>
    </>
  );
}

export default App;
