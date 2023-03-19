import "./App.css";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Main from "./components/Main/Main.js";
import Form from "./components/Form/Form";
import Entries from "./components/Entries/Entries";

function App() {
  return (
    <>
      <Header>JOURNAL</Header>
      <Main>
        <Form />
        <Entries />
      </Main>
      <Footer>
        <p>Journal App --2028</p>
      </Footer>
    </>
  );
}

export default App;
