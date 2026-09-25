import { lazy, Suspense, useState, use } from "react";

import styles from "./Message_box.module.css";

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
    console.error("---Error fetching from Unsplash:", err);
  }
};
const useResourse = fetchData();

export default function Messages_box_comp({ setLoad }) {
  const [apiData, setApiData] = useState(use(useResourse));

  return (
    <>
      <span id={styles.Message_box_comp}>
        <div className={styles.msg_box_top}>
          <div className={styles.msg_box_heading_notifi}>
            <p>Message</p>
            <span className={styles.heading_notifi}>
              <b>6</b>
            </span>
          </div>

          <div className={styles.toggle_btns}>
            <i
              className={"fa-solid fa-up-right-and-down-left-from-center "}
              style={{ color: " rgb(255, 255, 255)" }}
            ></i>

            <i
              className={"fa-solid fa-xmark "}
              style={{ color: " rgb(255, 255, 255)" }}
              onClick={() => setLoad(false)}
            ></i>
          </div>
        </div>

        <div className={styles.friends_chats}>
          <ul>
            {apiData.map((items, idx) => {
              return (
                <li key={idx}>
                  <div className={styles.seperate_frnd}>
                    <span className={styles.frnd_img_name}>
                      <img
                        src={
                          items.user.profile_image.medium
                            ? items.user.profile_image.medium
                            : "data:image/png;base64,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"
                        }
                        alt="friend acount image"
                      />
                      <span className={styles.frind_name_msg}>
                        <p id={styles.friend_name}>
                          {items.user.social.instagram_username ? (
                            items.user.social.instagram_username
                          ) : (
                            <em>unknown user</em>
                          )}
                        </p>
                        <p id={styles.num_msg}>
                          4+ new messages <span>. 1h</span>
                        </p>
                      </span>
                    </span>
                    {idx > 5 ? (
                      ""
                    ) : (
                      <span className={styles.blue_dot}>
                        <p></p>
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </span>
    </>
  );
}
