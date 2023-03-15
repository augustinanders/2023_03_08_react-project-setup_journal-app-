import Badge from "../Badge/Badge";
import Tab from "../Tab/Tab";

export default function EntriesNavigation() {
  return (
    <nav className="entries-navigation">
      <Tab>All Entries</Tab>
      <Badge>3</Badge>
      <Tab>Favourites</Tab>
      <Badge>5</Badge>
    </nav>
  );
}
