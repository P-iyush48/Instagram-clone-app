import { use, Suspense, useEffect, useState } from "react";
import styles from "./Posts_comp.module.css";
import Post_top_sec from "./Post_top_sec";
import Post_bottom_comp from "./Post_bottom_comp";

//! Fetch Data from API
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
const url = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;
const fetchData = async () => {
  try {
    let resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Client-Id ${ACCESS_KEY}`,
      },
    });

    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }

    resp = await resp.json();
    return resp;
  } catch (err) {
    console.error("Error fetching from Unsplash:", err);
  }
};
const useResourse = fetchData();

export default function Social_Post_Comp() {
    const apiData = use(useResourse);
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {
        apiData.map((items,idx)=>{
            // console.log(items);
            
            return <li key={idx}>
                <span className={styles.social_post}>
                    <Post_top_sec props={{'profile_img':items.user.profile_image.medium, "instagram_username":items.user.social.instagram_username, "short_description":items.short_description}} />
                    
                    <div className={styles.post_mid_sec}>
                        <img src={items.urls.raw} alt={''} />
                    </div>

                    <div className={styles.post_bottom_sec}>
                        <Post_bottom_comp />
                    </div>
                </span>
            </li>
        })
    }
    </Suspense>
  );
}

