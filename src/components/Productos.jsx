import styles from "../styles/Productos.module.css";
import Producto from "./Producto";

function Productos() {
  const arreglo = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={styles.contenido}>
      <h1 className={styles["contenido-titulo"]}>
        Nuestros <span>Productos</span>
      </h1>
      <div className={styles.productos}>
        {arreglo.map((val) => (
          <Producto key={val} producto={val} />
        ))}
      </div>
    </div>
  );
}

export default Productos;
