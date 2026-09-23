import styles from "./Stories.module.css";

export default function Stories() {
  return (
    <>
      <Stories_comp />
      <Stories_comp />
      <Stories_comp />
    </>
  );
}

function Stories_comp() {
  return (
    <>
      <div className={styles.seprate_story}>
        <span className={styles.story}>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofVCxl_BpxaRfqtJEesydiSZTSdo3MUQT8FtuEJiS4A&s=10"
            alt=""
          />
        </span>
        <p>marina_vali01</p>
      </div>
      <div className={styles.seprate_story}>
        <span className={styles.story}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bGZ-v9oBwP5gAupfyQm7qCWOj7dK4TZdqQSc5aSaCg&s=10"
            alt=""
          />
        </span>
        <p>muckhi_kali_02</p>
      </div>
      <div className={styles.seprate_story}>
        <span className={styles.story}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBxIjU7SzbzzGCKx7fRN3yp_ctHcTATZj0HzOy4WxXQ&s=10"
            alt=""
          />
        </span>
        <p>fortchi_lover_03</p>
      </div>
      <div className={styles.seprate_story}>
        <span className={styles.story}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPItS0fxXwM7lqCnM7wdiwMc_VCvuRNwEy0WQ1_9UaQ&s=10"
            alt=""
          />
        </span>
        <p>26_gamer_shapX</p>
      </div>
      <div className={styles.seprate_story}>
        <span className={styles.story}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13-qt4miwKNGzCl3g9BaJkYF-vPFdt-XkV9NuZdg-DA&s=10"
            alt=""
          />
        </span>
        <p>uncle_po_18</p>
      </div>
      <div className={styles.seprate_story}>
        <span className={styles.story}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLUrDgg4zrykmLj_rbQ00Bx7m0WPOMltATHvWyxVMWQ&s=10"
            alt=""
          />
        </span>
        <p>fake_couples^_~</p>
      </div>
    </>
  );
}
