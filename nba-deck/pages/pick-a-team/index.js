import { useState } from "react";
import { TeamLink, TeamSelector, Title } from "../../styles";
import Link from "next/dist/client/link";
function PickATeam ({colors}){
    const [favTeam, setFavTeam] = useState(null)
    const handleFavTeam = (e) => {
        const { id } = e.target;
        let res = colors.filter(item=>item.team===id)[0]
        setFavTeam(res)
    }
    return (
        <div style={{textAlign:"center"}}>
               <Title style={{ fontSize: "90px" }}>Select Your Team</Title>
          <div className="bg-gray-100 grid grid-cols-6" style={{ marginRight:'auto', marginLeft:'auto'}}>
              
        {colors.length>0?colors.map((item, idx) =>(
            <TeamSelector
            onClick={(e) => {
              handleFavTeam(e);
            }}
            id={item.name}
            key={idx}
            className={`bg-pink-100 p-1 hover:bg-${
                JSON.parse(item.colors)[0].colorName
              } rounded-lg m-3`}
          >
            <img
              style={{ width: "100px", height: "100px" ,  marginRight:'auto', marginLeft:'auto'}}
              id={item.team}
              src={item.img}
              alt={item.team}
            />
         </TeamSelector>
        )):""}</div>
        {favTeam ? (
          <Link
            href={`/team/${favTeam.abv}`}
            
            
          >
            <div style={{ width: "inherit", marginTop: "2.5%" }}
            className={`w-full text-center border border-transparent  font-large rounded-md text-white bg-${
                JSON.parse(favTeam.colors)[0].colorName
              } hover:bg-${JSON.parse(favTeam.colors)[1].colorName}`}>
              < Title style={{ fontSize: "30px" }}>{favTeam.team}→</Title>{" "}
            </div>
          </Link>
        ) : (
       ""
        )}
        </div>
    )
}

PickATeam.getInitialProps = async (ctx) => {
    const res = await fetch('https://nba-deck-be.herokuapp.com/api/colors')
    const json = await res.json()
    return { colors: json.data }
  }


export default PickATeam