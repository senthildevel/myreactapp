interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ onClear, cartItems }: Props) => {
  return (
    <>
      <div>
        {cartItems.map((item) => (
          <h4>{item}</h4>
        ))}
      </div>
      <button onClick={() => onClear()}>Clear</button>
    </>
  );
};

export default Cart;
