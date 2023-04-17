import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { Link } from "react-router-dom";

const Moviee = (props) => {
  console.log(props);
  const { ref, focused, focusSelf, setFocus } = useFocusable();
  return (
    <div ref={ref} className={`movie-details ${focused ? "focused" : ""}`}>
      <div className="movie-box">
        <Link to="/details">
          <div className="image-container">
            <img src={props.mov.image.medium} alt="" />
          </div>
        </Link>
      </div>
      <p className="movie-text">{props.mov.name}</p>
    </div>
  );
};

export default Moviee;
