import CardData from "../CardData/CardData";
import CardText from "../CatdText/CardText";
import "./EntriesCard.css";

export default function EntriesCard() {
  return (
    <article className="entries-card">
      <CardData />
      <CardText />
    </article>
  );
}
