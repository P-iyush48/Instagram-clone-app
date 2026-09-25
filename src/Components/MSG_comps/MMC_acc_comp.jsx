import { useState } from "react";
import styles from "../popup_msg.module.css";

export default function MMC_acc_c() {
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails")),
  );

  return (
    <>
      <div className={styles.user_ac_detail}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sW5cqc0iVs5Gy2I7yhKlKz3MdkThtsyCXKUOi6bQ2Q&s=10" />
        <span className={styles.user_ac_name}>
          <p className={styles.un_1}>
            {userDetails?.username && userDetails.username
              ? userDetails.username
              : "demo_username"}
          </p>
          <p className={styles.un_2}>
            {userDetails?.username && userDetails.username
              ? userDetails.username
              : "sec_name"}
          </p>
        </span>
        <p className={styles.switch_p}>Switch</p>
      </div>

      <div className={styles.sugg_copywrite}>
        <div className={styles.sugg_heading}>
          <span className={styles.sugg}>
            <p>Suggested</p>
          </span>
          <span className={styles.see_all_p}>
            <p>See all</p>
          </span>
        </div>
        <div className={styles.info_list}>
          <ul>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>.</p>
            </li>
            <li>
              <p>Help</p>
            </li>
            <li>
              <p>.</p>
            </li>
            <li>
              <p>Press</p>
            </li>
            <li>
              <p>.</p>
            </li>
            <li>
              <p>API</p>
            </li>
            <li>
              <p>.</p>
            </li>
            <li>
              <p>Jobs</p>
            </li>
            <li>
              <p>.</p>
            </li>
            <li>
              <p>Privacy</p>
            </li>
            <li>
              <p>.</p>
            </li>
            <li>
              <p>Terms</p>
            </li>
            <li>
              <p>.</p>
            </li>
            <li>
              <p>Locations</p>
            </li>
            <li>
              <p>.</p>
            </li>
            <li>
              <p>Language</p>
            </li>
            <li>
              <p>.</p>
            </li>
            <li>
              <p>Meta Verified</p>
            </li>
          </ul>
        </div>
        <div className={styles.copywrite}>
          <p>&copy; 2026 instagram clone</p>
        </div>
      </div>
    </>
  );
}
