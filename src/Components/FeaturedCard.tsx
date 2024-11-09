// FeaturedCard.js
import Image from "next/image";
import styles from "./FeaturedCard.module.css";

export default function FeaturedCard({
  image,
  title,
  year,
  sidebar,
  paragraph,
}: any) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.cardImage}
          src={image}
          alt="Card"
          width={250}
          height={180}
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div>
          <div className={styles.cardInfo}>
            <button className={styles.yearButton}>{year}</button>
            <h2 className={styles.sidebar}>{sidebar}</h2>
          </div>
          <div className={styles.cardParagraph}>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
