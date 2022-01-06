import "bootstrap/dist/css/bootstrap.min.css";
import { PlayerProvider } from "./contexts/player/PlayerContext";
import { TeamProvider } from "./contexts/team/TeamContext";
import Routing from "./routing/Routing";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <PlayerProvider>
        <TeamProvider>
          <Routing />
        </TeamProvider>
      </PlayerProvider>
    </div>
  );
};

export default App;
