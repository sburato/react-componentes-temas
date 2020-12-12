import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }    

  body {
    background: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};
    font-size: 14px;    
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;    
    transition: all 0.2s linear;      
  }

  header h1 {
    font-weight: 900;
    text-align: center;
  }

  .theme-app {
    display: flex;
    flex-direction: column;    
    align-items: center;    
    justify-content: center; 
    border: solid 1px gray;    
    width: 700px;
    height: 300px;
    margin: 128px auto;
  }  

  .theme-button {
    background-color: ${({theme}) => theme.colors.buttonBackground}; 
    color: ${({theme}) => theme.colors.buttonText};
    font-size: 20px;                    
    font-weight: 700;    
    border: solid 1px gray;    
    outline-style: none;    
    text-align: center;    
    padding: 0.4rem;  
  }   

  .theme-input {
    width: 60%;
    font-size: 20px;                    
    font-weight: 700;    
    color: ${({theme}) => theme.colors.text};
    background-color: ${({theme}) => theme.colors.background};
    padding: 0.4rem;  
    outline-style: none;       
    border: solid 1px gray;
  } 
  
  .theme-form {
    width: 90%;
    text-align: center;    
    margin: 60px 0px;
  }  
`;