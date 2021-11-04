import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Title } from "../style";
import TeamContext from "../context";
const PickATeam = () => {
  const { teams, favoriteTeam, setFavoriteTeam} = useContext(TeamContext);

  const handleFavTeam = (e) => {
   
    const { alt } = e.target;
   
    let res = teams.filter((item) => item.key === alt)[0];

    setFavoriteTeam(res)
   
  };
  return (
     (
      <div className="App">
        <Title style={{ fontSize: "90px" }}>Select Your Team</Title>
        <div className="bg-gray-100 grid grid-cols-6">
          { teams.map((item) => (
            <div
              onClick={(e) => {
                handleFavTeam(e);
              }}
              id={item.key}
              
              key={item.key}
              className={`bg-pink-100 p-1 hover:bg-${
                item.theme.primary
              } rounded-lg m-3`}
            >
              <img
                style={{ width: "100px", height: "100px" }}
                id={item.abv}
                src={item.logo}
                alt={item.key}
              />
            </div>
          ))}
        </div>{" "}
        {favoriteTeam ? (
          <Link
            to={`/team/${favoriteTeam.key}`}
            style={{ width: "inherit", marginTop: "2.5%" }}
            className={`w-full text-center border border-transparent  font-large rounded-md text-white bg-${
              favoriteTeam.theme.secondary
            } hover:bg-${favoriteTeam.theme.primary}`}
          >
            <div>
              <Title style={{ fontSize: "30px" }}>{favoriteTeam.name}→</Title>{" "}
            </div>
          </Link>
        ) : (
       ""
        )}
      </div>
    )
  );
};
export default PickATeam;
