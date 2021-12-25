import React from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const boxVariants: Variants = {
    start: {
        scale: 0,
        opacity: 0
    },
    end: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.2,
            delayChildren: 0.5,
            staggerChildren: 0.2
        }
    }
};
const DotVariants: Variants = {
    start: {
        opacity: 0,
        translateY: 20
    },
    end: {
        opacity: 1,
        translateY: 0,
        transition: {
            type: "tween",
            duration: 0.2
        }
    }
};

function Variant() {
    return (
        <Box variants={boxVariants} initial="start" animate="end">
            <Dot variants={DotVariants} /><Dot variants={DotVariants} />
            <Dot variants={DotVariants} /><Dot variants={DotVariants} />
        </Box>
    );
}

export default Variant;

const Box = styled(motion.div)`
  width: 200px;
  display: grid;
  aspect-ratio: 1;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255,255,255,0.2);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin: 25px;
`;

const Dot = styled(motion.div)`
  place-self: center;
  background-color: white;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4), 0 10px 20px rgba(0, 0, 0, 0.3);
`;