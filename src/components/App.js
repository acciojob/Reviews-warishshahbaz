import React from "react";
import Review from "./review";
const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2 id="review-heading">Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;
