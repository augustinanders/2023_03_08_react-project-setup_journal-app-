import "./App.css";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";
import Form from "./components/Form/Form";
import Input from "./components/Input/Input";
import Label from "./components/Label/Label";
import Textarea from "./components/Textarea/Textarea";
import EntriesNavigation from "./components/EntriesNavigation/EntriesNavigation";
import Badge from "./components/Badge/Badge";
import Tab from "./components/Tab/Tab";
import EntriesCard from "./components/EntriesCard/EntriesCard";
import CardDate from "./components/CardDate/CardDate";
import CardTitle from "./components/CardTitle/CardTitle";
import Star from "./components/Star/Star";
import CardText from "./components/CatdText/CardText";

function App() {
  return (
    <>
      <Header>JOURNAL</Header>
      <Main>
        <Form>
          <h2>NEW ENTRY</h2>
          <Label htmlFor="motto">Motto</Label>
          <Input type="text" name="motto" id="motto" required />

          <Label htmlFor="notes">Notes</Label>
          <Textarea rows="5" cols="33" name="notes" id="notes" required />

          <Input className="create" type="submit" value="Create!" />
        </Form>
        <section className="entries">
          <EntriesNavigation>
            <Tab>All Entries</Tab>
            <Badge>3</Badge>
            <Tab>Favourites</Tab>
            <Badge>5</Badge>
          </EntriesNavigation>
          <EntriesCard>
            <CardDate />
            <CardTitle />
            <Star />
          </EntriesCard>
          <CardText />
        </section>
      </Main>
      <Footer>
        <p>Journal App --2028</p>
      </Footer>
    </>
  );
}

export default App;
