import EntriesCard from "../EntriesCard/EntriesCard";
import EntriesNavigation from "../EntriesNavigation/EntriesNavigation";
import "./Entries.css";

export default function Entries({ children }) {
  return (
    <section className="entries">
      <EntriesNavigation />
      <section className="card-section">
        <EntriesCard />
      </section>
    </section>
  );
}
