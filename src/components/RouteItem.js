import "./RouteItem.css";

const RouteItem = (props) => {
  const deleteItemHandler = (event) => {
    const id = event.target.parentElement.previousElementSibling.id;
    props.onRemove(id);
  };

  return (
    <div className="card2">
      <li id={props.route.id} key={props.route.id}>
        <span className="grade">{props.route.grade}</span>
        <span className="type">{props.route.type}</span>
        <span className="where">{`${props.route.where} / ${props.route.date}`}</span>
        <span className="comments">{props.route.comments}</span>
      </li>
      <div className="delete">
        <button className="btn" onClick={deleteItemHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default RouteItem;
