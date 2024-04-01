import React from "react";

function Review({ val }) {
  return (
    <div key={val.id} className="container">
      <div className="box">
        <p>Author</p>
        <span className="author" id="author-id">
          {val.name}
        </span>
      </div>
      <div className="box">
        <p>Job</p>
        <span className="job">{val.job}</span>
      </div>
      <div className="box">
        <p>Text</p>
        <span className="info">{val.text}</span>
      </div>
      <div className="box">
        <p>Image</p>
        <img className="person-img" src={val.image} alt="img" />
      </div>
    </div>
  );
}

export default Review;
