// BlogSection.js
import Link from "next/link";
import styles from "./BlogSection.module.css";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Recent posts</h2>
        <Link href={"#"}>View all</Link>
      </div>
      <div className={styles.cardGrid}>
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
