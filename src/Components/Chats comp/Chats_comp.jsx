import React from "react";

import styles from "./Chats_comp.module.css";
import Stories from "../Users_stories/Stories_comp";
import Messages_box_comp from "../MSG_comps/Message_box_comp";

export default function Chats_comp({ Navbar }) {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div className={styles.chats_comp}>
      <div className={styles.cc_navbar}>
        <Navbar />
      </div>

      <div className={styles.chat_section}>
        <div className={styles.cs_left}>
          <div className={styles.cs_l_head}>
            <div className={styles.csl_h_top}>
              <span className={styles.csl_h_username}>
                {userDetails.username ? userDetails.username : "guest-user"}
                <i class="fa-solid fa-angle-down" style={{color: "rgb(255, 255, 255)"}}></i>
              </span>
              <i className="fa-solid fa-pen-to-square fa-2xl" id={styles.pen_square} style={{color: "rgb(255, 255, 255)"}}></i>
            </div>
            <div className={styles.csl_h_bottom}>
              <span>
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{color:" rgb(255, 255, 255)"}}
                ></i>
                <input type="text" name="search_inp" placeholder="search" />
              </span>
            </div>
          </div>
          <div className={styles.cs_l_circle_imgs}>
            <Stories />
          </div>
          <div className={styles.cs_l_msg_section}>
            <Messages_box_comp />
          </div>
        </div>

        <div className={styles.cs_right}>
          <div className={styles.cs_r_top}>
            <i
              className="fa-solid fa-down-left-and-up-right-to-center fa-xl"
            ></i>
          </div>
          <div className={styles.cs_r_bottom}>
            <p className={styles.big_circle}>
                <i className="fa-brands fa-airbnb icons fa-lg" ></i>
            </p>
            <p className={styles.your_msg_text}>Your messages</p>
            <p className={styles.send_msg_p}>Send a message to start a chat</p>
            <button className={styles.send_msg_btn}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
