import styled from "styled-components";
import * as React from "react";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 37px;
  height: 22px;
`;

const Slider = styled.span`
  border-radius: 22px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    border-radius: 22px;
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(11px);
  }
`;

interface Props {
  checked: boolean;
  onChange: (e: any) => void;
}

const Toggle: React.FC<Props> = props => (
  <Switch>
    <Checkbox
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
    />
    <Slider />
  </Switch>
);

export default Toggle;
