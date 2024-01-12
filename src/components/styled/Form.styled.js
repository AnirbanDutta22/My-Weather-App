import styled from "styled-components";

export const SignContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const SignInputs = styled.div`
  margin-bottom: 20px;
  width: 100%;
  &:first-child span {
    font-size: 2vw;
  }
  & input {
    width: 20vw;
    padding: 20px;
    outline: none;
    border: 0.5px solid transparent;
    border-radius: 20px;
  }
`;
