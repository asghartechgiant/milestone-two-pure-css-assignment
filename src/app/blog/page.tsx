// BlogPage.js
import BlogCard from "@/Components/BlogCard";
import styles from "./BlogPage.module.css";

function BlogPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Blog</h1>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}

export default BlogPage;
