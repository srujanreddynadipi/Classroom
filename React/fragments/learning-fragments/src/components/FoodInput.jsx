// // import styles from './FoodInput.module.css'
const FoodInput = ({handleOnKeyDown}) => {
    return (
        <input
            type="text"
            placeholder="Enter the food Item Here"
            className="food-input"
            onKeyDown={handleOnKeyDown}
        />
    );
};

export default FoodInput;
