import "./App.css";
import Aside from "./Aside/Aside";
import Container from "./Container/Container";
import Cards from "./Cards/Cards";
import Section from "./Section/Section";
import UnderSection from "./UnderSection/UnderSection";
import Footer from "./Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container text-center">
        <div className="row" id="navBar">
          <div className="col -md-1 p-2 m-2" id="colo">
            HOME
          </div>
          <div className="col -md-1 p-2 m-2" id="colo">
            ABOUT US
          </div>
          <div className="col -md-1 p-2 m-2" id="colo">
            CONTACT
          </div>
          <div className="col -md-1 p-2 m-2" id="colo">
            COMPANY
          </div>
          <div className="col -md-1 p-2 m-2" id="colo">
            SERVICES
          </div>
        </div>
        <Aside></Aside>
        <Container></Container>
        <Cards></Cards>
        <Section></Section>
        <UnderSection></UnderSection>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
