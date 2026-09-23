import styles from './Login_left.module.css'
import insta_logo from '../assets/instagram-color-codes-logo.png';

export default function Loginpage_left_comp(){
    return<>
        <div className={styles.top}>
            <img className={styles.top_img} src={insta_logo} width={"60px"} height={"60px"} alt="insragram-logo" />
        </div>
        <div className={styles.left}></div>
        <div className={styles.images_container}>
            <h1>See everyday movements from your <span className={styles.graident_text}>close friends</span>.</h1>
            <div className={styles.images}>
                <div className={styles.img1}>
                <img src="https://i.pinimg.com/474x/ff/02/e9/ff02e9e7afe2224973878f1f66f598e8.jpg" alt="" />
                </div>
                <div className={styles.img2}>
                    <img src="https://i.pinimg.com/474x/a1/ea/c4/a1eac4bce029095a8e1e5eddfef7c4b6.jpg" alt="" />
                </div>
                <div className={styles.img3}>
                    <img src="https://i.pinimg.com/474x/3a/45/f1/3a45f190a0f13ac0170c2abd3ada0470.jpg" alt="" />
                </div>
            </div>
            <span className={styles.star_icon}>
                <i className="fa-solid fa-star" style={{color: "rgb(255, 255, 255)"}}></i>
                <i className="fa-solid fa-angle-down" style={{color:" rgb(255, 255, 255)"}}></i>
            </span>
            <span className={styles.story_img_container}>
                <img className={styles.story_img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO98vYk-v17Wa-yAzj33Bp1ZwXeXwbOWCmiJKKDxUP4Fw37t0hrN8XAt4R&s=10' alt="" />
            </span>
            <span className={styles.emoji_container}>
                <i className={styles.emojis}>🔮👀🤯</i>
            </span> 
            <i className="fa-solid fa-heart fa-lg" id={styles.heart_icon} ></i>
        </div>
    </>
}