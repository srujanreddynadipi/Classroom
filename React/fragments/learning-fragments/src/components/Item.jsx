import styles from "./Item.module.css";

const Item = ({ foodItems , bought ,handleBuyButton }) => {
  // let {foodItems} = props; // destucturing the propos so that we can use the foodItem directly without using props

  return (
    <li className={`${styles["span"]} list-group-item ${bought && "active"} `}>
      <span className="span">{foodItems}</span>
      <button
        onClick={(event) => handleBuyButton(event)}
        type="button"
        className={`${styles.button} btn btn-info`}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
