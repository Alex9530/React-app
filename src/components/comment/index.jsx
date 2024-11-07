import s from "./index.module.css"

const Comment = ({ item }) => {
  return (
    <div className={s.comment}>
      <h4>{item.name}</h4>
      <h5>{item.location}</h5>   
    </div>
  );
}

export default Comment;