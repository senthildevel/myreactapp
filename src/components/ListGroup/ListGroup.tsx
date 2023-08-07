import { useState } from "react";
//import styles from "./ListGroup.module.css";
//import "./ListGroup.css";
import styled from "styled-components";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const List = styled.ul`
  list-style-type: none;
  padding: 15px;
  border: 1px solid yellow;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  color: green;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  background: ${(props) => (props.active ? "blue" : "")};
`;

// Reusable componenet
interface ListGroupProps {
  // items [], heading:string
  items: string[];
  title: string;
  onSelectedItem: (item: string) => void;
}
// items
function ListGroup({ items, title, onSelectedItem }: ListGroupProps) {
  // Shape of the component

  //cities = [];
  // const heading = "Cities";

  // state
  let [selectedItem, setSelectedItem] = useState(-1);
  //  args[0] data to be changed
  //  args[1] updater function

  // let message = (cities.length > 0) ? cities : "No Items Found";
  //map
  // let cityList = items.map((item, index) => (
  //   <ListItem
  //     active={index == selectedItem}
  //     key={item}
  //     onClick={() => {
  //       setSelectedItem(index);
  //       onSelectedItem(item); // parent.handleSelected(item)
  //     }}
  //   >
  //     {item}
  //   </ListItem>
  // ));

  //let message = cities.length == 0 && "No Items Found";

  // function getMessage() {
  //   return cities.length == 0 && "No Items Found";
  // }

  let getMessage = () => {
    return items.length == 0 && "No Items Found";
  };

  return (
    <>
      <h1
        className="list-style-none p-5 w-20"
        style={{ color: "red", fontSize: "38px" }}
      >
        {title}
      </h1>
      <BsFillCalendarCheckFill color="red" size={28} />
      {getMessage()}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index == selectedItem}
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectedItem(item); // parent.handleSelected(item)
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
