import reactIMG from "./assets/react-core-concepts.png";
import componetsIMG from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descriptor = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactIMG} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{descriptor} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept title="Components" description="The core UI building block" img={componetsIMG} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
