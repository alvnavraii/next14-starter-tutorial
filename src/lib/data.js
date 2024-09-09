// TEMPORARY DATA
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

const posts = [
  { id: 1, title: "Post 1", body: "Lorem ipsum", userId: 1 },
  { id: 2, title: "Post 2", body: "Lorem ipsum", userId: 1 },
  { id: 3, title: "Post 3", body: "Lorem ipsum", userId: 2 },
  { id: 4, title: "Post 4", body: "Lorem ipsum", userId: 2 },
];
export const GetPosts = async () => {
  return posts;
};
export const GetPost = async (id) => {
  return posts.find((post) => post.id === Number(id));
};

export const GetUser = async (id) => {
  return users.find((user) => user.id === Number(id));
};
