import React from "react";
import "./CardStandard.scss";

const data = [
  {
    id: 1,
    title: "Standard Project One",
    link: "https://example.com/standard-project-one",
    items: ["Detail 1", "Detail 2", "Detail 3"],
  },
  {
    id: 2,
    title: "Standard Project Two",
    link: "https://example.com/standard-project-two",
    items: ["Detail A", "Detail B", "Detail C"],
  },
  {
    id: 3,
    title: "Standard Project Three",
    link: "https://example.com/standard-project-three",
    items: ["Detail X", "Detail Y", "Detail Z"],
  },
  {
    id: 4,
    title: "Standard Project One",
    link: "https://example.com/standard-project-one",
    items: ["Detail 1", "Detail 2", "Detail 3"],
  },
  {
    id: 5,
    title: "Standard Project Two",
    link: "https://example.com/standard-project-two",
    items: ["Detail A", "Detail B", "Detail C"],
  },
];

const CardStandard = () => {
  return (
    <div className="card-standard-container">
      {data.map((card) => (
        <div
          key={card.id}
          className="card-standard"
        >
          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{card.title}</h2>
          </a>
          <ul>
            {card.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CardStandard;
