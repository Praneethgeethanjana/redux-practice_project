import { useSelector, useDispatch } from "react-redux";
import "./PostCard.css";
import Post from "./Post";
import { useEffect } from "react";
import { fetchPosts } from "../../store/post";

const PostsCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);



  const postData = useSelector((state) => state.post.posts);



  return (
    <div className="card">
      {postData.slice(0,20).map((list) => (
        <Post
          key={list.id}
          list={{
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
