import Image from "next/image";
import styles from "./singlePost.module.css";
function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1191090/pexels-photo-1191090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/1191090/pexels-photo-1191090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width="50"
            height="50"
            className={styles.avatar}
          />
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Andrea LockHeart</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.01.2024</span>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo repellat
          labore quaerat vero quos voluptate est harum excepturi totam aut saepe
          cum accusamus laborum, quasi veritatis reiciendis optio reprehenderit.
          Dolores.
        </div>
      </div>
    </div>
  );
}
export default SinglePostPage;
