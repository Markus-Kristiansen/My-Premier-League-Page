import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainNavigation from "../components/shared/MainNavigation";
import {
  NewPlayer,
  NewTeam,
  PlayerDetail,
  Players,
  TeamDetail,
  Teams,
  UpdateDeletePlayer,
  UpdateDeleteTeam,
} from "../pages/index";

const Routing = () => {
  return (
    <BrowserRouter>
      <MainNavigation />

      <Routes>
        <Route path="/" element={<Players />} />
        <Route path="new-player" element={<NewPlayer />} />
        <Route path="new-team" element={<NewTeam />} />
        <Route path="players" element={<Players />} />
        <Route path="teams" element={<Teams />} />
        <Route path="player-info/:id" element={<PlayerDetail />} />
        <Route
          path="update-delete-player/:id"
          element={<UpdateDeletePlayer />}
        />
        <Route path="update-delete-team/:id" element={<UpdateDeleteTeam />} />
        <Route path="team-info/:id" element={<TeamDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
