import React from "react";
import "./CardStandard.scss";
import "../CardStyles/CardStyles.scss";

const data = [
  {
    id: 1,
    title: "Aperio Group",
    items: ["SCSS", "HTML", "jQuery"],
    link: "https://www.aperiogroup.com/",
  },
  {
    id: 2,
    title: "Baker Boyer Bank",
    items: ["SCSS", "HTML", "jQuery"],
    link: "https://www.bakerboyer.com/",
  },
  {
    id: 3,
    title: "Omnicell",
    items: ["SCSS", "HTML", "jQuery"],
    link: "https://www.omnicell.com/",
  },
  {
    id: 4,
    title: "Westfield Insurance",
    items: ["SCSS", "HTML", "jQuery"],
    link: "https://www.westfieldinsurance.com/",
  },
  {
    id: 5,
    title: "Boston Architectural College",
    items: ["SCSS", "HTML", "jQuery"],
    link: "https://the-bac.edu/",
  },
  {
    id: 6,
    title: "LSUS",
    items: ["SCSS", "HTML", "jQuery"],
    link: "https://www.lsus.edu/",
  },
  {
    id: 7,
    title: "JFI",
    items: ["SCSS", "HTML", "jQuery"],
    link: "https://jfi.org/",
  },
  {
    id: 8,
    title: "KUMC",
    items: ["SCSS", "HTML", "jQuery"],
    link: "https://www.kumc.edu/",
  },
  {
    id: 9,
    title: "EWEB",
    items: ["SCSS", "HTML", "jQuery"],
    link: "https://www.eweb.org/",
  },
];

const CardStandard = () => {
  return (
    <div className="card-standard-container">
      {data.map((card) => (
        <a
          key={card.id}
          className="card card-standard"
          href={card.link}
          target="_blank"
          aria-label={`View ${card.title} in a new tab`}
          rel="noopener noreferrer"
        >
          <h4>{card.title}</h4>
          <ul>
            {card.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </a>
      ))}
    </div>
  );
};

export default CardStandard;
