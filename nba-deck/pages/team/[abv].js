import router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import TeamLoader from "../../components/TeamLoader";
export default function TeamPage(data) {
  
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
    console.log(data)
  const router = useRouter();
  return ( <div>{showLoader && data? <TeamLoader img={`/img/${data.team.logo}`} /> :
  <>
  Team #{router.query.abv};
  </>}
   </div>) 
}

TeamPage.getInitialProps = async (ctx) => {
    // console.log(ctx)
    const res = await fetch('https://nba-deck-be.herokuapp.com/api/themes')
    const json = await res.json()
    let team = json.data.filter(item=>item.key==ctx.query.abv)[0]
    const teamInfo = await fetch(`https://data.nba.com/data/v2015/json/mobile_teams/nba/2021/teams/${team.name.split(" ")[1].toLowerCase()}_roster.json`)
    return {data:{roster: teamInfo, team:team}}
  }