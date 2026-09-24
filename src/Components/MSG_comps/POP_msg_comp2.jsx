import styles from "../popup_msg.module.css";

export default function Pop_msg() {
  return (
    <>
      <div className={styles.cyl_message}>
        <span className={styles.message_icon}>
          <i
            className="fa-brands fa-airbnb icons fa-lg"
            title="share"
            style={{ color: "rgb(255, 255, 255)" }}
          ></i>
          <span className={styles.notification}>6</span>
        </span>
        <span className={styles.message_text}>
          <p>Messages</p>
        </span>
        <span className={styles.frd_acc_images}>
          <img className={styles.img1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLUrDgg4zrykmLj_rbQ00Bx7m0WPOMltATHvWyxVMWQ&s=10" alt="" />
          <img className={styles.img2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBxIjU7SzbzzGCKx7fRN3yp_ctHcTATZj0HzOy4WxXQ&s=10" alt="" />
          <img className={styles.img3} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13-qt4miwKNGzCl3g9BaJkYF-vPFdt-XkV9NuZdg-DA&s=10" alt="" />
          <span className={styles.dots_3}>
            <p>...</p>
          </span>

        </span>
      </div>
    </>
  );
}
