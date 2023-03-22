import EntriesCard from "../EntriesCard/EntriesCard";
import EntriesNavigation from "../EntriesNavigation/EntriesNavigation";
import "./Entries.css";

export default function Entries({ entries }) {
  return (
    <section className="entries">
      <EntriesNavigation />
      <section className="card-section">
        {entries.map((entry, index) => {
          console.log("index", index);

          return (
            <>
              {index > 0 && <div className="space"></div>}
              <EntriesCard
                key={entry.id}
                motto={entry.motto}
                date={entry.date}
                notes={entry.notes}
              />
            </>
          );
        })}
      </section>
    </section>
  );
}
