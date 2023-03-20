import EntriesCard from "../EntriesCard/EntriesCard";
import EntriesNavigation from "../EntriesNavigation/EntriesNavigation";
import "./Entries.css";

export default function Entries({ entries }) {
  return (
    <section className="entries">
      <EntriesNavigation />
      <section className="card-section">
        {entries.map((entry) => {
          return (
            <EntriesCard
              key={entry.id}
              motto={entry.motto}
              date={entry.date}
              notes={entry.notes}
            />
          );
        })}
      </section>
    </section>
  );
}
