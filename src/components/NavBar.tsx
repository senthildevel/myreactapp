interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>Nav bar : Cart count {cartItemsCount} </div>;
};

export default NavBar;
