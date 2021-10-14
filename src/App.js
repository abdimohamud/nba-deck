import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import {
  fetchTeamColors,
  fetchTeamData,
  fetchTeamDetails,
  fetchTeamImages,
  fetchTeamRosters,
} from "./redux/actions";
import Landing from "./pages/Landing";
import PickATeam from "./pages/PickATeam";
import Dashboard from "./pages/Dashboard";
const App = () => {
  const dispatch = useDispatch();
  const { teams, rosters, colors, images, teamData } = useSelector(
    (state) => state.preferences
  );
  useEffect(() => {
    if (!teams && !rosters && !colors && !images && !teamData) {
      dispatch(fetchTeamDetails());
      dispatch(fetchTeamRosters());
      dispatch(fetchTeamColors());
      dispatch(fetchTeamImages());
      dispatch(fetchTeamData());
    }
  }, [teams, dispatch, rosters, colors, images, teamData]);
  return (
    <Switch>
      <Route path="/team/:id">
        <Dashboard />
      </Route>
      <Route path="/pick-a-team">
        <PickATeam />
      </Route>
      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
  );
};

export default App;
