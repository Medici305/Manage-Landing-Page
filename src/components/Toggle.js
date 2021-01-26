import React, { useState } from "react";
import { Line } from "../Styles";
import styled from "styled-components";
import { motion } from 'framer-motion';

const Toggle = ({ children, title }) => {
  const [Toggle, setToggle] = useState(false);
  return (
    <StyledToggle layout onClick={() => setToggle(!Toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {Toggle ? children : ""}
      <Line></Line>
    </StyledToggle>
  );
};

const StyledToggle = styled(motion.div)`
  margin: 1rem 0rem;
  @media (max-width: 1420px) {
    width: 100%;
  }
`;

export default Toggle;
