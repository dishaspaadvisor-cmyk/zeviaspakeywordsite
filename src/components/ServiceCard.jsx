// src/components/ServiceCard.jsx

import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  image,
  title,
  description,
}) {
  return (
    <article className="service-card">
      <div className="service-card-image-wrap">
        <img
          src={image}
          alt={title}
          className="service-card-image"
          loading="lazy"
        />
      </div>

      <div className="service-card-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <button
          type="button"
          className="service-card-button"
        >
          Explore Service
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}