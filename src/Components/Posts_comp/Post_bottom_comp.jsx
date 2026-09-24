import { useState } from "react";
import styles from "./Posts_comp.module.css";

const futureAlert =   "! This feature explore in future. Thank you for visiting 'Instagram Clone Application.' !"

export default function Post_bottom_comp() {
  
  const [likedColor, setLikedColor] = useState(false);
  const handleFutureUpdates = () => {
    alert(futureAlert);
  };

  return (
    <>
      <button className={styles.like} onClick={() => setLikedColor(!likedColor)}>
        <i
          className={`${!likedColor ? "fa-regular" : "fa-solid"} fa-heart`}
          title="like"
          style={{ color: !likedColor ? "rgb(255, 255, 255)" : "red" }}
        ></i>
      </button>
      <button className={styles.comment} onClick={handleFutureUpdates}>
        <i
          className="fa-regular fa-comment"
          title="comment"
          style={{ color: "rgb(255, 255, 255)" }}
        ></i>
      </button>
      <button className={styles.share} onClick={handleFutureUpdates}>
        <i
          className="fa-brands fa-airbnb icons fa-lg"
          title="share"
          style={{ color: "rgb(255, 255, 255)" }}
        ></i>
      </button>
    </>
  );
}
