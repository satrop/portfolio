import React from "react";
import "./CardFeatured.scss";
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";

const data = [
  {
    id: 1,
    title: "ACOFP",
    imageUrl: img1,
    link: "https://acofp.org/family-physicians-do-more",
    items: ["SCSS", "Astro", "JS"],
  },
  {
    id: 2,
    title: "ADML",
    imageUrl: img2,
    link: "https://myadlm.org/",
    items: ["SCSS", "HTML", "jQuery", "Twig"],
  },
  {
    id: 3,
    title: "Wilson Center",
    imageUrl: img3,
    link: "https://www.wilsoncenter.org/",
    items: ["SCSS", "HTML", "jQuery", "Twig"],
  }
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
