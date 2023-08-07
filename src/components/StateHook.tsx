import { useState } from "react";

//[true, falsae]
const StateHook = () => {
  /* const [isVisible, setVisibiility] = useState(false);
  const [approved, setApproved] = useState(true);
  let count = 0; */

  //   const [firstName, setfirstName] = useState("John");
  //   const [lastName, setlastName] = useState("Doe");
  const [tags, setTags] = useState(["happy", "cheerful", "sad"]);

  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@test.com",
    address: {
      city: "San Francisco",
      zipcode: 9411,
    },
  });

  //const [isLoading, setLoading] = useState(false);

  //   const fullName = firstName + " " + lastName;
  //   const getName = () => {
  //     let fullName = firstName + " " + lastName;
  //     return fullName;
  //   };

  const handleClick = () => {
    // setVisibiility(true);
    // count++;
    // console.log(isVisible);
    // console.log("Count", count);
    //person.firstName = "Joseph";
    // let newPerson = {
    //   ...person,
    //   email: "joseph@test.com",
    // };

    //setTags([...tags, "exciting"]);

    //setTags(tags.filter((tag) => tag != "happy"));

    setTags(tags.map((tag) => (tag == "happy" ? "happiness" : tag)));

    setPerson({
      ...person,
      email: "testing@test.com",
      address: { ...person.address, zipcode: 9412 },
    });
  };
  return (
    <div>
      <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
      <p>
        {person.firstName} {person.email} {person.address.zipcode}
      </p>
      <button onClick={handleClick}>Show</button>
    </div>
  );
};
export default StateHook;
