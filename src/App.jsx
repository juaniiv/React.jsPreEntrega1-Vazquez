import "./App.css";
import NavbarComponent from "../components/navbar/NavbarComponent.jsx";
import ItemListContainer from "../components/ItemListContainer.jsx";


function App() {
  return (
    <>
    
      <NavbarComponent color="black"  />
      <ItemListContainer greeting="¡Hola a todos!"/>
    </>
  );
}

export default App;
