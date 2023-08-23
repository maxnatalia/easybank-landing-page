import Navigation from "./Navigation";
import Header from "./Header";
import Offering from "./Offering";
import Articles from "./Articles";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <Offering />
        <Articles />
      </main>
      <Footer />
    </>
  );
};

export default App;
