import React from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const boxVariants: Variants = {
    hover: {
        opacity: 0.5,
    },
    tap: {
        scale: 1.05,
        opacity: 1,
        borderRadius: "50%",
        rotateZ: 90,
        boxShadow: "6px -3px 20px black",
    }
};

function GestureNDrag() {
    return (
        <Box variants={boxVariants}
            whileHover="hover"
            whileTap="tap"
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        />
    );
}

export default GestureNDrag;

const Box = styled(motion.div)`
  width: 200px;
  aspect-ratio: 1;
  background-color: rgba(255,255,255);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin: 25px;
`;