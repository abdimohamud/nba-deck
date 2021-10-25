import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-right: 2.5%;
  margin-left: 2.5%;
  overflow: visible;
`;

export const Title = styled.p`
  width: auto;
  height: auto;
  overflow: visible;
  white-space: pre;
  font-weight: 900;
  font-family: "Inter-Black", "Inter", sans-serif;

  font-size: 71px;
  letter-spacing: 0px;
  line-height: 1.2;
`;

export const Emoji = styled.p`
  width: auto;
  height: auto;
  overflow: visible;
  white-space: pre;
  font-weight: 900;
  font-style: normal;
  font-family: "Inter", sans-serif;
  color: #000000;
  font-size: 72px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: left;
`;

export const Heading = styled.div`
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5%;
`;

export const CardContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  width: 900px;
  margin-top: 1.5%;
`;

export const Card = styled.div`
  height: 700px;
  width: 400px;
  display:flex;
  justify-content:center;
`;
export const Button = styled.div`
  width: 189px;
  height: 88px;

  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
`;
export const ButtonText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 22px;
  font-weight: 900;
`;
export const Mid = styled.div`
display: -webkit-flex;
display: flex;
-webkit-justify-content: space-between;
justify-content: space-between;s
`;
