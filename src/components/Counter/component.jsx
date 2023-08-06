export const Counter = ({ quantity, updateQuantity }) => {

    const inputChange = (event) => {
        if (!event?.target.value.length) {
            updateQuantity(0);
        }

        const value = parseInt(event?.target.value, 10);

        if (typeof value === "number" && value >= 0) {
            updateQuantity(value);
        } else {
            updateQuantity(quantity);
        }
    }

    return <div>
        <button
            type="button"
            disabled={quantity === 0}
            onClick={() => updateQuantity(quantity -= 1)}>-</button>
        <input
            type="text"
            value={quantity}
            onChange={() => inputChange(event)} />
        <button
            type="button"
            onClick={() => updateQuantity(quantity += 1)}>+</button>
    </div>;
};
