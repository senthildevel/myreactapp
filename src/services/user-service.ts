import apiClient from "./api-client";
import create from "./http-client"

export interface User {
    id: number;
    name: string;
    email: string;
  }



export default create("/users");