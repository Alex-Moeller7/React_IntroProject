import { useState } from "react";

import componentsIMG from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  //first element is the the current data of the state
  //Second element is always a function. It can be used to update the stored value via updating a state
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
    //console.log("Selected Btn is: " + selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleClick("jsx")}>
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => handleClick("props")}>
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => handleClick("state")}>
              State
            </TabButton>
          </menu>

          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
          {/* Alternative way to use terniary operation:
          {!selectedTopic && <p>Please select a topic</p> } 
          {!selectedTopic && (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
          )}
          */}
        </section>
      </main>
    </div>
  );
}

export default App;
