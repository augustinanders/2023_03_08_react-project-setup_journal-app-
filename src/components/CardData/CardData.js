import { useState } from "react";
import Star from "../Star/Star";
import "./CardData.css";

export default function CardData() {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleBookmark() {
    setIsFavourite(!isFavourite);
  }

  return (
    <section className="card-data">
      <div className="entries-card__title">
        <h2>Title</h2>
        <Star
          fillColor={isFavourite ? "#FF4A11" : ""}
          onBookmark={handleBookmark}
        />
      </div>

      <p className="entries-card__date">FRB 26, 2028</p>
    </section>
  );
}
