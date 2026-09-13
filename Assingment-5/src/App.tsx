import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>(
    []
  );

  const [stack, setStack] = useState<Technology[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const handleAddToStack = (technology: Technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );

  if (alreadyAdded) {
    return;
  }

  setStack([...stack, technology]);
};

const handleRemoveFromStack = (id: string) => {
  setStack(
    stack.filter((item) => item.id !== id)
  );
};

const handleRemoveAll = () => {
  setStack([]);
};

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error loading technologies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          className="technologies-section"
          id="technologies"
        >
          <div className="section-heading">
            <p>EXPLORE</p>

            <h2>Technologies</h2>

            <span>
              Explore the technologies used by modern developers.
            </span>
          </div>

          {loading ? (
            <p className="loading-message">
              Loading technologies...
            </p>
          ) : (
            <div className="technology-layout">
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                  />
                ))}
              </div>

              <YourStack stack={stack} />
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;