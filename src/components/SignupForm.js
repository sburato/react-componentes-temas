import React from "react";

const SignupForm = () => {
  return (
    <>
      <header><h1>Sign up to my newsletter</h1></header>        
      <form className="theme-form" onSubmit={() => {}}> 
        <input type="text" className="theme-input" placeholder="Informe o seu email" />
        <button className="button">Sign up</button>        
      </form>     
    </>
  );
}

export default SignupForm;
