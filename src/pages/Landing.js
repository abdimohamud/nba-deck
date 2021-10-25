import React, { useState } from "react";
import {
  Button,
  ButtonText,
  Card,
  CardContainer,
  Container,
  Emoji,
  Heading,
  Mid,
  Title,
} from "../style";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
const Landing = () => {
  const { colors } = useSelector((state) => state.preferences);
  const [toggle, setToggle] = useState(null);
  const increase = () => {
    if (toggle === 29||toggle === null ) {
      setToggle(0);
    } else {
      setToggle(toggle + 1);
    }
  };
  const decrease = () => {
    if (toggle === 0 || toggle === null) {
      setToggle(29);
    } else {
      setToggle(toggle - 1);
    }
  };
  return (
    <div
      className={
        toggle !== null
          ? `bg-${JSON.parse(colors[toggle].colors)[0].colorName}`
          : ""
      }
    >
      <Container style={{ justifyContent: "space-evenly" }}>
        <Heading>
          <Title
            className={
              toggle !== null
                ? ` text-${JSON.parse(colors[toggle].colors)[1].colorName}`
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
                    src={colors[toggle].img}
                    alt={colors[toggle].team}
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
            <Card
              className={
                toggle !== null
                  ? ` rounded-lg flex items-center bg-${
                      JSON.parse(colors[toggle].colors)[2].colorName
                    }`
                  : "rounded-lg"
              }
            >
             {toggle !== null
                  ? <PlayerCard  player={colors[toggle].duo[0]}/>:""}
            </Card>
            <Card
              className={
                toggle !== null
                  ? ` rounded-lg flex items-center bg-${
                      JSON.parse(colors[toggle].colors)[2].colorName
                    }`
                  : "rounded-lg"
              }
            >    {toggle !== null
                  ?<PlayerCard  player={colors[toggle].duo[1]}/> :""}</Card>
          </CardContainer>
          <NavLink to="/pick-a-team">
            <Button
              className={
                toggle !== null
                  ? ` rounded-lg shadow-lg bg-${
                      JSON.parse(colors[toggle].colors)[2].colorName
                    }  hover:bg-${
                      JSON.parse(colors[toggle].colors)[1].colorName
                    }`
                  : "rounded-lg shadow-lg"
              }
            >
              <ButtonText
                className={
                  toggle !== null
                    ? `text-${
                        JSON.parse(colors[toggle].colors)[1].colorName
                      } hover:text-${
                        JSON.parse(colors[toggle].colors)[0].colorName
                      }`
                    : ""
                }
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
