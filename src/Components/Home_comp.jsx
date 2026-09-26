import { lazy, Suspense } from "react";

import Users_posts_comp from "./Users_posts_comp";

const PopUp_msg_comp = lazy(()=>import('./PopUp_msg_comp'))

export default function Home_comp({Navbar}) {

    return<div className="Home_comp">

        {/* Vertical Navbar/Menu */}
        <Navbar />

        {/* Multiple users posts */}
        <Users_posts_comp />

        {/* chat pop-up */}
        {
            <Suspense fallback={<h5 style={{color:"white",opacity:"0.85"}}>Component Loading...</h5>}>
                <PopUp_msg_comp />
            </Suspense>
        }
    
    </div>
}