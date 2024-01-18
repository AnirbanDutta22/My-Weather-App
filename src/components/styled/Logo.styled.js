import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(NavLink)`
  cursor: pointer;
  padding: 10px;
  & img {
    width: 2.3vw;
    height: 2.3vw;
  }
`;
