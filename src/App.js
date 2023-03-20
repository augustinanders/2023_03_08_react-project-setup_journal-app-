import "./App.css";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";
import Form from "./components/Form/Form";
import Entries from "./components/Entries/Entries";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [newEntries, setNewEntries] = useState([]);
  const date = new Date().toLocaleDateString("en-us", {
    dateStyle: "medium",
  });
  function handleAddEntry(data) {
    setNewEntries([...newEntries, { ...data, id: uid(), date }]);
  }

  return (
    <>
      <Header>JOURNAL</Header>
      <Main>
        <Form onAddEntry={handleAddEntry} />
        <Entries entries={newEntries} />
      </Main>
      <Footer>
        <p>Journal App --2028</p>
      </Footer>
    </>
  );
}

export default App;
