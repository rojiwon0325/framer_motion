import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";


const boxVariants: Variants = {
    invisible: ({ visible, val }: { visible: number, val: number }) => ({
        x: 250 * (visible === 1 ? -1 : visible === 10 ? 1 : val),
        opacity: 0
    }),
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1,
        }
    },
    exit: ({ visible, val }: { visible: number, val: number }) => ({
        x: 250 * (visible === 1 ? -1 : visible === 10 ? 1 : -1 * val),
        opacity: 0,
        transition: {
            type: "tween",
            duration: 1,
        }
    }),
};

function AnimatePresenceBox() {
    const [visible, setVisible] = useState(1);
    const [val, setVal] = useState(1);
    return (
        <Wrap>
            <AnimatePresence>
                <Box
                    custom={{ visible, val }}
                    variants={boxVariants}
                    initial="invisible"
                    animate="visible"
                    exit="exit"
                    onClick={() => {
                        if (visible === 10) {
                            setVal(-1);
                            setVisible(visible - 1);
                        } else if (visible === 1) {
                            setVal(1);
                            setVisible(visible + 1);
                        } else {
                            setVisible(visible + val);
                        }
                    }}
                    key={visible}
                >
                    {visible}
                </Box>
            </AnimatePresence>
        </Wrap>
    );
}

export default AnimatePresenceBox;

const Wrap = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    margin: 25px;
`;

const Box = styled(motion.button)`
  width: 200px;
  aspect-ratio: 1;
  background-color: rgba(255,255,255);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  position: absolute;
  border: none;
`;