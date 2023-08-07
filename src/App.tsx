import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

const App = () => {
  //   const connect = () => console.log("Conencting");
  //   const disconnect = () => console.log("Disconnecting");
  const { users, isLoading, error, setUsers, setLoading, setError } =
    useUsers();

  const deleteUser = (u: User) => {
    console.log(u);
    const originalUser = [...users];
    setUsers(users.filter((user) => user.id != u.id));

    userService.delete(u.id).catch((err) => {
      console.log(err.message);
      setUsers(originalUser);
    });
  };

  const addUser = () => {
    const originalUser = [...users];
    const newUser = { id: 0, name: "Balaji", email: "balaji@gmail.com" };

    setUsers([newUser, ...users]);

    userService
      .add(newUser)
      .then(({ data: savedUser }) => {
        console.log(savedUser);
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    // setUsers(users.map((u) => (u.id == user.id ? updatedUser : u)));
    //setUsers(users.map((u) => (u.id == user.id ? updatedUser : u)));
    const originalUser = [...users];
    const updatedUser = { ...user, name: user.name + " ! " };

    setUsers(users.map((u) => (u.id == user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p>{error}</p>}
      <button className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="d-flex justify-content-between mb-3">
            {user.name}

            <div>
              <button
                className="btn btn-outline-secondary me-3"
                onClick={() => {
                  updateUser(user);
                }}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  deleteUser(user);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
