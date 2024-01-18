import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 52px;
  height: 23px;
  background: var(--main_color3);
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 17px;
    height: 17px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: var(--main_bg);
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: var(--main_color);

    &:before {
      transform: translate(27px, -50%);
    }
  }
`;
