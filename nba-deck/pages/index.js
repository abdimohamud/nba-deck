import Link from 'next/link'
import { useEffect, useState } from 'react'
import InitialLoader from '../components/InitialLoader'

import { Button, Border, Emoji, ButtonText, Card, CardContainer, Container, Heading, Mid, Title } from '../styles';
export default function Home({colors, theme, toggleTheme}) {
  const [toggle, setToggle] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  console.log({colors, theme, toggleTheme, toggle})
  
  const increase = () => {
    if (toggle === 29 || toggle === null) {
      setToggle(0);
    } else {
      setToggle(toggle + 1);
    }
  };
  const decrease = () => {
    if (toggle === 0 || toggle === null) {
      setToggle(29) ;
    } else {
      setToggle(toggle - 1);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if( toggle && colors.length>0 ){
      toggleTheme(colors[toggle]['theme'])
    }
  }, [toggle, colors])
  
  return (
    <>{showLoader ? <InitialLoader /> :
    <><Border>
    
    <Container style={{ justifyContent: "space-evenly" }}>
      <Heading><Title> NBA DECK</Title>
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
                    src={colors[toggle]['logo']}
                    alt={colors[toggle].name}
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
      <Mid><CardContainer>
        <Card className="rounded-lg shadow-lg"/><Card className="rounded-lg shadow-lg"/>
        </CardContainer>
        <Link href="pick-a-team">
          <Button  className="rounded-lg shadow-lg">
            <ButtonText> Ball in → </ButtonText>
          </Button>
        </Link></Mid>
  

    </Container>
    </Border>
  </>}</>)
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://nba-deck-be.herokuapp.com/api/themes')
  const json = await res.json()
  return { colors: json.data }
}