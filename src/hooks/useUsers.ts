import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import userService, { User } from '../services/user-service';

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    const [isLoading, setLoading] = useState(false);
  
    const [error, setError] = useState("");
  
    useEffect(() => {
      setLoading(true);
      const { userResponse, cancel } = userService.getAll<User>();
  
      userResponse
        .then((res) => {
          //console.log(res.data[0].name);
          setUsers(res.data);
          // setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          //setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
  
      return () => cancel(); // Effect cleanup
    }, []);

    return {users, isLoading, error, setUsers, setLoading, setError}
}

export default useUsers