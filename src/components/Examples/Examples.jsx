import { EXAMPLES } from "../../data.js";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section.jsx";
import Tabs from "../Tabs/Tabs.jsx";

import { useState } from "react";

export default function Examples() {
  //first element is the the current data of the state
  //Second element is always a function. It can be used to update the stored value via updating a state
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
