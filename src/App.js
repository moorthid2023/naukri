import { Nav_bar } from "./components/Nav_bar";
import { Search_section } from "./components/Search_section";
import { Banner } from "./components/Banner";
import { Widget } from "./components/Widget";
import { Carsoul } from "./components/Carsoul";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App ">
        <Nav_bar >
        </Nav_bar>
        <Banner></Banner>
        <Search_section></Search_section>
        <Widget></Widget>
        <Carsoul></Carsoul>
        <Footer />
      </div >

    </>
  );
}

export default App;
