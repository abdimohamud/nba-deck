import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  ButtonText,

  CardContainer,
  Container,
  Emoji,
  Heading,
  Mid,
  Title,
} from "../style";

import { NavLink } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import TeamContext from '../context'
const Landing = () => {
  const [toggle, setToggle] = useState(null);
  const { teams,  setFavoriteTeam } = useContext(TeamContext)
  const increase = () => {
    if (toggle === 29) {
      setToggle(null)
    } 
     else {
      setToggle(toggle + 1)
    }
  };
  const decrease = () => {
    if ( toggle === null) {
      setToggle(29)
    } else if (toggle === 1 || toggle === 0) {
      setToggle(null)
    } else {
      setToggle(toggle - 1)
    }
  };
  useEffect(() => {
if(toggle){
  setFavoriteTeam(teams[toggle])
}
  }, [toggle, teams, setFavoriteTeam])
  return (
    <div
      className={
        toggle !== null
          ? `bg-${teams[toggle].theme.primary}`
          : ""
      }
    >
      <Container >
        <Heading>
          <Title
            className={
              toggle !== null
                ? ` text-${teams[toggle].theme.secondary}`
                : ""
            }
          >
            NBA DECK
          </Title>

          <Emoji>
            <div className="outerBox">
              <span className="prev" onClick={decrease}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
              </span>
              {toggle ? (
                <span>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={teams[toggle].logo}
                    alt={teams[toggle].key}
                  />
                </span>
              ) : (
                <span>🏀</span>
              )}{" "}
              <span className="next" onClick={increase}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
          </Emoji>
        </Heading>

        <Mid>
          <CardContainer>
         
             {toggle !== null
                  ? <PlayerCard  player={teams[toggle].duo[0].pid} dashtheme={teams[toggle].theme}/>:""}
           
            {toggle !== null
                  ?<PlayerCard  player={teams[toggle].duo[1].pid} dashtheme={teams[toggle].theme}/> :""}
               
          </CardContainer>
          <NavLink to="/pick-a-team">
            <Button
              className={
                toggle !== null
                  ? ` rounded-lg shadow-lg bg-${
                      teams[toggle].theme.alt
                    }  hover:bg-${
                      teams[toggle].theme.secondary
                    }`
                  : "rounded-lg shadow-lg"
              }
            >
              <ButtonText
                className={
                  toggle !== null
                    ? `text-${
                        teams[toggle].theme.secondary
                      } hover:text-${
                        teams[toggle].theme.primary
                      }`
                    : ""
                }
                onClick={setFavoriteTeam(null)}
              >
                Ball in →
              </ButtonText>
            </Button>
          </NavLink>
        </Mid>
      </Container>
    </div>
  );
};

export default Landing;
