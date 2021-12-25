import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";

function Motion() {
    const x = useMotionValue(0);
    const rotateZ = useTransform(x, [-500, 500], [-90, 90]);
    const background = useTransform(x, [-500, 500], [
        "linear-gradient(135deg,rgb(0,210,238),rgb(0,83,238))",
        "linear-gradient(135deg,rgb(0,238,155),rgb(237,178,0))"
    ]);

    return (
        <Box
            drag="x"
            style={{ x, rotateZ, background }}
            dragSnapToOrigin
        />
    );
};

export default Motion;

const Box = styled(motion.div)`
  width: 200px;
  aspect-ratio: 1;
  background-color: rgba(255,255,255);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin: 25px;
`;