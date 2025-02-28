import React from "react";
import "./CardFeatured.scss";
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";

const data = [
  {
    id: 1,
    title: "Project One",
    imageUrl: img1,
    link: "https://example.com/project-one",
    items: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 2,
    title: "Project Two",
    imageUrl: img2,
    link: "https://example.com/project-two",
    items: ["Feature A", "Feature B", "Feature C"],
  },
  {
    id: 3,
    title: "Project Three",
    imageUrl: img3,
    link: "https://example.com/project-three",
    items: ["Feature X", "Feature Y", "Feature Z"],
  },
];

const CardFeatured = () => {
  return (
    <div className="card-featured-container">
      {data.map((card, index) => (
        <div
          key={card.id}
          className="card-featured"
        >
          <div className="media">
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
              />
            </a>
          </div>
          <div className="content">
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{card.title}</h3>
            </a>
            <ul>
              {card.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardFeatured;
