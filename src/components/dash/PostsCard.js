import { useSelector, useDispatch } from "react-redux";
import "./PostCard.css";
import Post from "./Post";
import { useEffect } from "react";
import { fetchPosts } from "../../store/post";

const PostsCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ limit: 20 }));
  }, [dispatch]);



  const postData = useSelector((state) => state.post.posts);

  return (
    <div className="card">
      {postData.map((list) => (
        <Post
          key={list.id}
          list={{
            userId:list.userId,
            id: list.id,
            title: list.title,
            body: list.body,
          }}
        />
      ))}
    </div>
  );
};

export default PostsCard;
