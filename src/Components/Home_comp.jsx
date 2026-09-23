import PopUp_msg_comp from "./PopUp_msg_comp";
import Users_posts_comp from "./Users_posts_comp";
import Navbar from "./Vert_Navbar_comp";

export default function Home_comp() {

    return<div className="Home_comp">

        {/* Vertical Navbar/Menu */}
        <Navbar />

        {/* Multiple users posts */}
        <Users_posts_comp />

        {/* chat pop-up */}
        <PopUp_msg_comp />
    
    </div>
}