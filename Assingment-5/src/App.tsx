import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="technologies">
          <h2>Technologies</h2>
        </section>

        <TechnologyCard />
        <YourStack />
      </main>

      <Footer />
    </>
  );
}

export default App;