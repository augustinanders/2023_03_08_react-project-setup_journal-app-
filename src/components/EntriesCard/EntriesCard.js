import CardDate from "../CardDate/CardDate";
import CardTitle from "../CardTitle/CardTitle";
import CardText from "../CatdText/CardText";
import Star from "../Star/Star";

export default function EntriesCard() {
  return (
    <article className="entries-card">
      {" "}
      <CardDate />
      <CardTitle />
      <Star />
      <CardText />
    </article>
  );
}
