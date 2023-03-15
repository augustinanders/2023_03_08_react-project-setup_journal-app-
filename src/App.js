import "./App.css";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";
import Form from "./components/Form/Form";
import EntriesNavigation from "./components/EntriesNavigation/EntriesNavigation";
import EntriesCard from "./components/EntriesCard/EntriesCard";

function App() {
  return (
    <>
      <Header>JOURNAL</Header>
      <Main>
        <Form />
        <section className="entries">
          <EntriesNavigation />
          <section className="card-section">
            <EntriesCard />
          </section>
        </section>
      </Main>
      <Footer>
        <p>Journal App --2028</p>
      </Footer>
    </>
  );
}

export default App;
