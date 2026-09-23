import Login_form from "./Login_form";
import Loginpage_left_comp from "./Login_left_side";

export default function Login_page() {

    return <div className="login-page">
       <div className="lp-left-side">
        <Loginpage_left_comp />
       </div>
       <div className="lp-right-side">
        <Login_form />
       </div>
    </div>
}