import CartWidgetComponent from "./CartWidgetComponent.jsx";
export default function NavbarComponent({ color }) {
  const misEstilos = {
    backgroundColor: color,
  };

  return (
    <>
      <nav style={misEstilos}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <img
              src="../img/cartoon_animal_dog_animals_cute_icon_260626.svg"
              alt=""
            />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="./index.html">Inicio</a>
            </li>
            <li>
              <a href="sass.html">Productos</a>
            </li>
            <li>
              <a href="badges.html">Contacto</a>
            </li>
            <li>
              <CartWidgetComponent />
            </li>
            <li>1</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
