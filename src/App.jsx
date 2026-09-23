import { BrowserRouter, Routes, Route, NavLink  } from "react-router"
import Login_page from "./LoginPage/Login_page"
import Home_comp from "./Components/Home_comp"

export default function App(){

    return<>
        <BrowserRouter>

            <Routes>
                <Route path="/">
                    <Route index element={<Login_page />} />
                    <Route path="/h" element={<Home_comp />} /> {/* Home Page route*/}
                </Route>


                <Route path="/*" element={<h2>404 Page Not Found ! ❌</h2>} />
            </Routes>
        </BrowserRouter>
    </>
}