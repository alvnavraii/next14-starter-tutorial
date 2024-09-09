import PostCard from "../../components/postCard/postCard";
import styles from "./blog.module.css";
import { GetPosts } from "../../lib/data";
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     refresh: 3600,
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };
const BlogPage = async () => {
  //const posts = await getData();

  const posts = await GetPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};
export default BlogPage;
