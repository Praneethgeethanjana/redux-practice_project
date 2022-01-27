import "./Card.css";

const Card = (props) => {
  const {email, name, mobile } = props.item;

  const data = {

    email,
    name,
    mobile,
  };

  const showData = () => {
    console.log(data);
  };

  return (
    <div onClick={showData} className="cardItem">
      <h4>Name :{name}</h4>
      <h4>Email:{email}</h4>
      <h4>Mobile:{mobile}</h4>
    </div>
  );
};

export default Card;
