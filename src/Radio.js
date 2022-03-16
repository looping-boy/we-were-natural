import React, { useState, useEffect,useContext } from "react";
import styled from "styled-components";
import {CounterContext} from './Questions'


const Mark = styled.span`
  background-color: lightgrey;
  display: block;
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    background-color: blue;
  }
`;

const Label = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px;
  align-items: center;
  user-select: none;
`;


const Radio = ({ name, letter, children, clicked }) => {
  const [radio, setRadio] = useState(false)
  const [count, setCount] = useState(0)


  useEffect(()=>{ 
    console.log(count)
    document.title = `${count}`
  },[count])

  const handleChange = (e) =>{
    setRadio(e.target.value)
    setCount(count+1)
  }

  const handleClick = (e) =>{
    e.stopPropagation();
  }

  return (
    <Label>
      <Input 
        name={name} 
        value = {name}
        type="radio" 
        checked={radio === `${name}`} 
        onChange={(e) => handleChange(e)}
        onClick={(e) => {handleClick(e);clicked();}}
      />
      <Mark className="hover">{letter}</Mark>
      {children}
    </Label>
  )
  
};

export default Radio;
