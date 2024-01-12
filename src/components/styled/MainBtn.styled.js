import styled from "styled-components";

export const MainButton = styled.button`
  font-size: 1vw;
  padding: ${(props) => props.padd};
  border-radius: ${(props) => props.brad};
  box-shadow: ${(props) => props.box_shadow};
  background-color: var(--secondColor);
  cursor: pointer;
  transition: 0.5s ease-in-out;
  width: ${(props) => props.width};
  text-align: center;

  &:hover {
    transform: ${(props) => props.transform};
    box-shadow: ${(props) => props.hover_box_shadow};
  }
  & .linkColor {
    color: #000;
    text-decoration: none;
  }
`;

MainButton.defaultProps = {
  width: "auto",
  padd: "1vw 1.8vw",
  box_shadow: "0px 8px 15px rgba(0, 0, 0, 0.134)",
  hover_box_shadow: "0px 10px 15px rgba(0, 0, 0, 0.289)",
  transform: "translateY(-5px)",
};
