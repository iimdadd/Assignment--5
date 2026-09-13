import type { Technology } from "../App";

interface TechnologyCardProps {
  technology: Technology;
}

function TechnologyCard({
  technology,
}: TechnologyCardProps) {
  return (
    <div className="technology-card">
      <div className="card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="technology-icon"
        />

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-info">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="rating">
        <span>★</span>
        <span>{technology.rating}</span>
      </div>

      <button className="add-stack-button">
        Add to Stack
      </button>
    </div>
  );
}

export default TechnologyCard;