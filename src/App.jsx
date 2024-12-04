import "./App.css";
import SportsList from "./SportsList";

function App() {
  // coming from back-end
  let sports = ["Cricket", "Football", "Hockey", "Boxing", "Kabaddi"];

  return (
    <div>
      <SportsList sports={sports} />
    </div>
  );
}

export default App;
