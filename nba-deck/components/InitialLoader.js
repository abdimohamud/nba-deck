import { motion } from "framer-motion";
import React from "react";
import styled from 'styled-components'
const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const LoadingDot = {
  display: "block",
  width: "10rem",
  height: "10rem",
  backgroundImage: `url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/105/basketball-and-hoop_1f3c0.png)`,
  borderRadius: "5rem",
  marginRight: "auto",
  marginLeft: "auto"
};

const LoadingContainer = {

  display: "flex",
  justifyContent: "space-between"
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.
    }
  },
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const DotVariants = {
  initial: {
    y: "0%"
  },
  animate: {
    y: "100%"
  }
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut"
};

const InitialLoader =()=> {
  return (
    <LoaderContainer>
      <h1 style={{fontSize:"5rem", fontFamily:"Inter"}}>Loading</h1>
    <div
      style={{
        paddingTop: "",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
    </LoaderContainer>
  );
}
export default InitialLoader