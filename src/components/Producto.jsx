import styles from "../styles/Productos.module.css";

const Producto = ({ producto }) => {
  return (
    <div className={styles.producto}>
      <div>
        <img
          src=""
          alt="celular"
        />
      </div>
      <p className={styles["producto-titulo"]}>Producto {producto}</p>
      <span className={styles["producto-precio"]}>$0.0</span>
    </div>
  );
};

export default Producto;
