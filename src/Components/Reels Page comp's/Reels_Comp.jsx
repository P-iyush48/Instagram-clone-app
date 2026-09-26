import React from "react";

import styles from "./Reels_comp.module.css";
import Social_Post_Comp from "../Posts_comp/Posts_comp";

export default function Reels_Comp({Navbar}) {
  return (
    <div className={styles.reels_comp}>
      <div className={styles.reels_div1}>
        <Navbar />
      </div>
      <div className={styles.reels_div2}>
        <ul>
          <Social_Post_Comp />

        </ul>
      </div>
    </div>
  );
}
