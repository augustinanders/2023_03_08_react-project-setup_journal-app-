import CardData from "../CardData/CardData";
import CardText from "../CatdText/CardText";
import "./EntriesCard.css";

export default function EntriesCard({ motto, date, notes }) {
  return (
    <article className="entries-card">
      <CardData motto={motto} date={date} />
      <CardText notes={notes} />
    </article>
  );
}
