import styles from "./popup_msg.module.css";
import MMC_acc_c from "./MSG_comps/MMC_acc_comp";
import Pop_msg from "./MSG_comps/POP_msg_comp2";

export default function PopUp_msg_comp() {
  return (
    <div className={styles.popup_msg_main_container}>
      <div className={styles.pms_div_1}>
        <MMC_acc_c />
      </div>
      <div className={styles.pms_div_2}>
        <Pop_msg />
      </div>
    </div>
  );
}




