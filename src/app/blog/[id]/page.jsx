"use client";
import Image from "next/image";
import styles from "./singlePost.module.css";
import { useParams } from "next/navigation";
import { GetPost, GetUser } from "../../../lib/data";
import { Suspense, useEffect, useState } from "react";
import PostUser from "../../../components/postuser/postUser";
/*const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};*/
const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const post = await GetPost(id);
      setPost(post);
    };
    getData();
  }, [id]);

  console.log(post);
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1589082/pexels-photo-1589082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/1589082/pexels-photo-1589082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width="50"
            height="50"
            className={styles.avatar}
          />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={post.userId} />
        </Suspense>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published: </span>
          <span className={styles.detailValue}>01.01.2024</span>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};
export default SinglePostPage;
