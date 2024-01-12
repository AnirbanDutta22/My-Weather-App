import styled from "styled-components";

export const SubBox2 = styled.div`
  margin-left: ${(props) => props.ml};
  margin-bottom: 10px;
  padding: ${(props) => props.padd};
  display: flex;
  justify-content: space-between;
  border-radius: ${(props) => props.brad};
  background-color: ${(props) => props.bg};
`;

export const Heading1 = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexd};
  justify-content: space-between;
  align-items: ${(props) => props.align};
  flex-basis: ${(props) => props.flexb};
  & h1 {
    color: #000;
    font-size: 2.5vw;
  }
  & p {
    display: ${(props) => props.descr};
  }
  & .temp {
    color: #000;
    font-size: ${(props) => props.fsize};
    margin-top: ${(props) => props.tempmargin};
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
  ml: "30px",
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
};
