{
  /* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */
}
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  console.log(count, "count");
  return (
    <>
      <div className="main">
        <h2 id="review-heading">Our Reviews</h2>
        {Data.slice(count - 1, count).map((val, i) => {
          return (
            <div key={val.id} className="review">
              <div className="box">
                <p>Author</p>
                <span className="author">{val.name}</span>
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
                <img src={val.image} alt="img" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn_box">
        <button
          className="prev-btn"
          onClick={() => {
            if (count > 1) {
              setCount((pre) => pre - 1);
            }
          }}
        >
          prev
        </button>
        <button
          className="next-btn"
          onClick={() => {
            if (Data.length > count) setCount((pre) => pre + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

const Data = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
