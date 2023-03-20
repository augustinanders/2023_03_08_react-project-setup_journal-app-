import { useState } from "react";
import Star from "../Star/Star";
import "./CardData.css";

export default function CardData({ motto, date }) {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleBookmark() {
    setIsFavourite(!isFavourite);
  }

  return (
    <section className="card-data">
      <div className="entries-card__title">
        <h2>{motto}</h2>
        <Star
          fillColor={isFavourite ? "#FF4A11" : ""}
          onBookmark={handleBookmark}
        />
      </div>

      <p className="entries-card__date">{date}</p>
    </section>
  );
}
