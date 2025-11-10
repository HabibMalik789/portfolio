import React from "react";

function Portfolio({ portfolio: { name, category, image } }) {
  return (
    <div className="portfolio-item">
      <div className="details">
        <h4 className="title">{name}</h4>
        <span className="term">{category.join(", ")}</span>
      </div>
      <span className="plus-icon">+</span>
      <div className="thumb">
<img
  src={image}
  alt={name}
  className="img-fluid"
  style={{
    width: "100%",
    maxWidth: "800px",
    aspectRatio: "5 / 3",
    objectFit: "cover",
    height: "auto",
    display: "block",
    margin: "0 auto",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)", // soft card-style shadow
    border: "1px solid rgba(0, 0, 0, 0.05)",   // subtle border like your reference
  }}
/>


        <div className="mask"></div>
      </div>
    </div>
  );
}

export default Portfolio;
