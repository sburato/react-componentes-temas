import React from "react";
import styled from "styled-components";

const DarkModeButton = styled.button`{
  background: ${({theme}) => theme.colors.buttonBackground};
  color: ${({theme}) => theme.colors.buttonText};
  border: none;
  outline-style: none;  
  font-size: 15px;             
  width:300px;  
  border-radius: 30px;
  cursor: pointer;
  padding: 0.6rem;    

  &:hover {
    opacity: 0.8; 
  }  
`;

const Toggle = ({theme, toggleTheme}) => {
  let caption = theme.title === 'light' ? 
      'Mudar para tema escuro' : 
      'Mudar para tema claro';  

  return (
    <DarkModeButton onClick={toggleTheme}>{caption}</DarkModeButton>
  );
};

export default Toggle;