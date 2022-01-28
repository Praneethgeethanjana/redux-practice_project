import './Post.css';

const Post = (props) => {

    const {id,title,body} = props.list;

    const data = {

       
        id,
        title,
        body,
  }

  const showPost= () => {
      console.log(data);
  }

  return (
    <div onClick={showPost} className="postItem">
    <h4>ID   :{id}</h4>
    <h4>Title :{title}</h4>
    <h4>Body :{body}</h4>

</div>
  )
};

export default Post;
