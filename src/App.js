
import './App.css';
import Titulo from "./components/Titulo"

const App = () => {
  return (
    <div className="temas-app">
      <Titulo title = "Sign up to my newsletter" />
      <form className="temas-form" onSubmit={() => {}}> 
        <input 
          type="text"
          placeholder="my@email.com"
          className="temas-input"
        />      
        <button className="temas-button">Sign up</button>        
      </form>
    </div>
  );
}

export default App;
