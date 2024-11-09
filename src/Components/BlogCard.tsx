import styles from "./BlogCard.module.css";

export default function BlogCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>
          Making a design system from scratch
        </h2>
        <ul className={styles.cardMeta}>
          <li className={styles.date}>12 Feb 2020</li>
          <li className={styles.tags}>
            <span className={styles.tag}>Design</span>
            <span className={styles.tag}>Pattern</span>
          </li>
        </ul>
        <p className={styles.cardDescription}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <a href="#" className={styles.readMore}>
          Read More
        </a>
      </div>
    </div>
  );
}
