# Starting Project from React Course Section 3

## Goal: Learn React from Scratch

### Section 3 Intro Project

This Repo represents the first project of the course and is incredibly basic.
This Repo is meant to smooth over any oversight of previous React learning experiences.

In other words, a step back in order to take more steps forwards.

### Topics include:
- **Components** and file structure
- **Props** and how to use them across components
- **JSX**, what it is, and how it difers from normal JavaScript
- **State** and how it affects dynamic content

### Most Notable Aspects Learned (In my opinion)
- **Dynamic buttons**: When clicking a button in a list of buttons, highlight the one currently selected

  EX:
  
  <TabButton isSelected={selectedTopic === "components"} onClick={() => handleClick("components")}>Components</TabButton>

  
- **Dynamically changing text**: As you refresh the page, the intro sentence changes every refresh

  EX:

  const descriptor = reactDescriptions[genRandomInt(2)];

  
- **Iteration through objects using the map() function**

  EX:

  {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />))}


Note: Node_Modules is not included in the repo... to run you will need to clone, run "npm i", then run "ng serve" to run the project
