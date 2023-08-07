import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const App = () => {
  //   const connect = () => console.log("Conencting");
  //   const disconnect = () => console.log("Disconnecting");
  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/usersx"
        );
        setUsers(users.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUser();

    //return () => disconnect(); // Effect cleanup
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
