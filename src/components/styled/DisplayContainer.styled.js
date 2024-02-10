import styled from "styled-components";

export const SubBox2 = styled.div`
  margin-left: ${(props) => props.ml};
  padding: ${(props) => props.padd};
  display: flex;
  justify-content: space-between;
  border-radius: ${(props) => props.brad};
  background-color: ${(props) => props.bg};
  box-shadow: ${(props) => props.shadow};
  flex-basis: 70%;
`;

export const Heading1 = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexd};
  justify-content: space-between;
  align-items: ${(props) => props.align};
  flex-basis: ${(props) => props.flexb};
  & h1 {
    color: ${(props) => props.h1color};
    font-size: 2.5vw;
  }
  & p {
    text-transform: uppercase;
    color: ${(props) => props.pcolor};
  }
  & .temp {
    font-size: ${(props) => props.fsize};
    margin-top: ${(props) => props.tempmargin};
    color: ${(props) => props.tempcolor};
  }
`;

export const Heading2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 8vw;
    height: 8vw;
  }
`;

SubBox2.defaultProps = {
  ml: "0px",
  brad: "0",
  bg: "transparent",
  padd: "3vw",
};

Heading1.defaultProps = {
  flexd: "column",
  align: "flex-start",
  flexb: "0",
  tempmargin: "20px",
  fsize: "3.4vw",
  descr: "block",
  h1color: "var(--main_color2)",
  pcolor: "var(--main_text)",
  tempcolor: "var(--main_text)",
};
