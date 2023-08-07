import { useState } from "react";
import produce from "immer";

const StateHook1 = () => {
  //   const [firstName, setfirstName] = useState("John");
  //   const [lastName, setlastName] = useState("Doe");

  //   const [person, setPerson] = useState({
  //     firstName: "John",
  //     lastName: "Doe"

  //   });

  //const [tags, setTags] = useState(["happy", "cheerful", "sad"]);

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", status: false },
    { id: 2, title: "Bug 2", status: false },
  ]);

  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    //setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, status: true } : bug)));

    //setBugs(bugs.map((bug) => (bug.id == 2 ? { ...bug, status: true } : bug)));

    // setBugs(
    //     produce((draft) => {
    //       const bug = draft.find((bug) => bug.id === 1);
    //       if (bug) bug.status = true;
    //     })
    //   );

    setBugs(
      produce((bdraft) => {
        const bug = bdraft.find((bug) => bug.id === 1);
        if (bug) bug.status = true;
      })
    );

    //console.log(tags);
    //setTags([...tags, "silent"]);
    //setTags(tags.map((tag) => (tag === "cheerful" ? "cheers" : tag)));
    //setTags(tags.filter((tag) => tag != "cheerful"));
    //person.firstName = "Joseph";
    // const newPerson = {
    //   ...person,
    //   firstName: "Joseph",
    // };
    // setPerson({
    //   ...person,
    //   firstName: "Joseph",
    // });
  };

  return (
    <div>
      {/* {person.firstName} {person.lastName} */}

      {/* <ul>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul> */}

      <ul>
        {bugs.map((bug) => (
          <li>
            {bug.id} --- {bug.title} ---- {bug.status ? "Fixed" : "Pending"}
          </li>
        ))}
      </ul>

      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default StateHook1;
