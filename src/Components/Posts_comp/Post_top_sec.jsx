import { useState, use } from "react";
import styles from "./Posts_comp.module.css";

export default function Post_top_sec({ props }) {
//   console.log(props);

  return (
    <div className={styles.post_top_sec}>
      <div className={styles.top_1st}>
        <img
          src={
            props?.profile_img
              ? props?.profile_img
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13-qt4miwKNGzCl3g9BaJkYF-vPFdt-XkV9NuZdg-DA&s=10"
          }
          alt={
            props?.short_description
              ? props?.short_description
              : "network issue"
          }
        />
        <p>
          <b>
            {props?.instagram_username && props?.instagram_username
              ? props?.instagram_username
              : "unknown_userXX"}
          </b>
        </p>
      </div>
      <div className={styles.top_2nd}>
        <p>...</p>
      </div>
    </div>
  );
}
