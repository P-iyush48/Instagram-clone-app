import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router";
import { useEffect } from "react";

import Login_page from "./LoginPage/Login_page";
import Home_comp from "./Components/Home_comp";
import Navbar from "./Components/Vert_Navbar_comp";
import Reels_Comp from "./Components/Reels Page comp's/Reels_Comp";
import Chats_comp from "./Components/Chats comp/Chats_comp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login_page />} />
            <Route path="h-p" element={<Home_comp Navbar={Navbar} />} />
            <Route path="h/reels" element={<Reels_Comp Navbar={Navbar} />} />
            <Route path="h/chats-p" element={<Chats_comp Navbar={Navbar} />} />
            <Route path="h/search" element={<Future_update_msg />} />
          </Route>

          <Route path="/*" element={<h2>404 Page Not Found ! ❌</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


function Future_update_msg() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/h-p");
    }, 10000);
  }, []);

  return (
    <>
      <h1
        style={{
          color: "skyblue",
          textAlign: "center",
          margin: "20%",
          boxShadow: "0px 0px 500px 20px blue, inset 0px 0px 10px 0.2px red",
          borderRadius: "5px",
          height: "2.5rem",
        }}
      >
        This page is an under maintainance phases
      </h1>
      <br />
      <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
        <p style={{color:"gray"}}>We navigate you on Home page wait 5s</p>
      </div>
    </>
  );
}
