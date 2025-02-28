import React from "react";
import "./CardStandard.scss";

import data from "./CardStandardData.json";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

const CardStandard = ({ type }) => {
  const cards = data.standard[type]?.projects || [];

  return (
    <ul className="card-standard-container">
      {cards.map((card, index) =>
        card.links.linkTwo ? (
          <li
            key={`${card.title}-${index}`}
            className="card-standard"
          >
            <h4>{card.title}</h4>
            <ul>
              {card.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
            <ul className="card-links">
              <li>
                <a
                  href={card.links.linkOne}
                  target="_blank"
                  aria-label={`View ${card.title} in a new tab`}
                  rel="noopener noreferrer"
                  className="tooltip tooltip--bottom"
                >
                  <FaExternalLinkSquareAlt aria-hidden="true" />
                  <span aria-hidden="true">View demo</span>
                </a>
              </li>
              <li>
                <a
                  href={card.links.linkTwo}
                  target="_blank"
                  aria-label={`View ${card.title} GitHub repository in a new tab`}
                  rel="noopener noreferrer"
                  className="tooltip tooltip--bottom"
                >
                  <FaGithub aria-hidden="true" />
                  <span aria-hidden="true">View code</span>
                </a>
              </li>
            </ul>
          </li>
        ) : (
          <li
            key={`${card.title}-${index}`}
            className="card-standard card-standard--live"
          >
            <a
              href={card.links.linkOne}
              target="_blank"
              aria-label={`View ${card.title} in a new tab`}
              rel="noopener noreferrer"
            >
              <h4>{card.title}</h4>
              <ul>
                {card.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </a>
          </li>
        )
      )}
    </ul>
  );
};

export default CardStandard;
