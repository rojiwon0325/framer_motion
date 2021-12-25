import React from "react";
import styled from "styled-components";
import InDrag from "./InDrag";
import GestureNDrag from "./Gesture";
import Variant from "./Variant";
import Motion from "./MotionValue";
import SvgAnimate from "./SvgAnimate";
import AnimatePresenceBox from "./AnimatePresence";

function App() {
  return (
    <Wrapper>
      <Variant />
      <SvgAnimate />
      <GestureNDrag />
      <InDrag />
      <Motion />
      <AnimatePresenceBox />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
