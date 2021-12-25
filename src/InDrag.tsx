import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function InDrag() {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <Box ref={ref}>
            <DraggingBox
                drag
                dragConstraints={ref}
                dragElastic={0.5}
                dragSnapToOrigin
            />
        </Box>
    );
}

export default InDrag;

const DraggingBox = styled(motion.div)`
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 15px;
`;

const Box = styled(motion.div)`
  width: 200px;
  aspect-ratio: 1;
  background-color: rgba(255,255,255,0.5);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;