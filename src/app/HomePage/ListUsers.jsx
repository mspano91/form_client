"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3002/list");
      setUsers(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-red-500">Users</h1>
      {users.length > 0 && (
        <ul className="text-white">
          {users.map((user, index) => (
            <li key={index}>
              Name: {user.name}, Email: {user.email}, Password: {user.password}
            </li>
          ))}
        </ul>
      )}
      {users.length === 0 && <p>No users available</p>}
    </div>
  );
}
