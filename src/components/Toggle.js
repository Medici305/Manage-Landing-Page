import React, { useState } from "react";
import { Line } from "../Styles";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [Toggle, setToggle] = useState(false);
  return (
    <StyledToggle onClick={() => setToggle(!Toggle)}>
      <h4>{title}</h4>
      {Toggle ? children : ""}
      <Line></Line>
    </StyledToggle>
  );
};

const StyledToggle = styled.div`
  margin: 1rem 0rem;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default Toggle;
