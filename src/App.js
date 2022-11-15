import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
// JSX: Javascript XML
// ES6
// Babel
// parent component
function App() {
  const name = "Evondev";
  return (
    <div>
      <YoutubeList>
        {/* children: html, component, text, variable */}
      {name}
      </YoutubeList>
    </div>
  );
  // Props -> Propertise
}
// Rendering list
export default App;
