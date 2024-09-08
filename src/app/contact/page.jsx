import styles from "./contact.module.css";
import Image from "next/image";

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input placeholder="Name and Surname" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number (Optional)" />
          <textarea cols="30" rows="10" placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
      <div></div>
    </div>
  );
}
export default ContactPage;
