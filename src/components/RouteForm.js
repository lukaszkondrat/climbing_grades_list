import { useRef } from "react";

import Card from "./Card";
import "./RouteForm.css";

const RouteForm = (props) => {
  const gradeInputRef = useRef();
  const typeInputRef = useRef();
  const whereInputRef = useRef();
  const commentsInputRef = useRef();
  const dateInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      grade: gradeInputRef.current.value,
      type: typeInputRef.current.value,
      where: whereInputRef.current.value,
      comments: commentsInputRef.current.value,
      date: dateInputRef.current.value,
    };
    props.onAdd(data);
    gradeInputRef.current.value = "";
    typeInputRef.current.value = "";
    whereInputRef.current.value = "";
    commentsInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div className="first-row">
          <span className="grade">
            <label htmlFor="grade">Grade: </label>
            <input type="text" id="grade" ref={gradeInputRef} required />
          </span>
          <span className="type">
            <label htmlFor="type">Type: </label>
            <select name="type" id="type" ref={typeInputRef} required>
              <option value="">Please choose a type</option>
              <option value="slab">Slab</option>
              <option value="vertical">Vertical</option>
              <option value="overhang">Overhang</option>
            </select>
          </span>
          <span className="where">
            <label htmlFor="where">Where: </label>
            <input type="text" id="where" ref={whereInputRef} required />
          </span>
        </div>
        <div className="second-row">
          <label htmlFor="comments">Comments: </label>
          <textarea rows="0" cols="80" id="comments" ref={commentsInputRef} />
        </div>
        <div className="third-row">
          <label htmlFor="date">Date: </label>
          <input type="date" id="date" ref={dateInputRef} required />
        </div>
        <div className="btn">
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
};

export default RouteForm;
