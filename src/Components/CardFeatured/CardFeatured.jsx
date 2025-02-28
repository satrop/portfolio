import React from "react";
import "./CardFeatured.scss";
import "../CardStyles/CardStyles.scss";
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";

const data = [
  {
    id: 1,
    title: "ADML",
    imageUrl: img1,
    link: "https://myadlm.org/",
    items: ["SCSS", "HTML", "jQuery", "Twig"],
  },
  {
    id: 2,
    title: "Wilson Center",
    imageUrl: img2,
    link: "https://www.wilsoncenter.org/",
    items: ["SCSS", "HTML", "jQuery", "Twig"],
  },
  {
    id: 3,
    title: "Whitman College",
    imageUrl: img3,
    link: "https://www.whitman.edu/",
    items: ["SCSS", "HTML", "jQuery"],
  },
];

const CardFeatured = () => {
  return (
    <div className="card-featured-container">
      {data.map((card, index) => (
        <div
          key={card.id}
          className="card card-featured"
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
