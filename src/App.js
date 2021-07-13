import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import PickATeam from './pages/PickATeam'
import Team from './pages/Team'
function App() {
  const [favTeam, setFavTeam] = useState(null)
  console.log(favTeam)
  const handleClick = e =>{
    console.log(e)
    e.preventDefault()
    setFavTeam(e.target.alt)
  }
  return (
    <div>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/pick-a-team"><PickATeam setFavTeam={setFavTeam} handleClick={handleClick} favTeam={favTeam}/></Route>
        <Route path="/team"><Team favTeam={favTeam}/></Route>
      </Switch>
    </div>
  );
}

export default App;
