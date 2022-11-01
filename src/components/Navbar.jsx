import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className={styles["nav"]}>
      <div className={styles['nav-logo']}>
        <img src={logo} alt="logo" />
        <p>Productos</p>
      </div>
      <button className={styles['nav-cart']}>
        <i className="fa-solid fa-cart-shopping"></i>
        <p>Mi Carrito</p>
      </button>
    </nav>
  );
}

export default Navbar;
