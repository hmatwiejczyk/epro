import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IndexPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchValues();
  }, []);
  const fetchValues = async () => {
    await axios.get('/api/new-user');
    const res = await axios.get('/api/users');
    setUsers(res.data);
  };

  return (
    <div className="App">
      <h2>List of users</h2>
      {users.map((user: any, index: number) => {
        return (
          <p key={index}>
            {index + 1}: {user.email}
          </p>
        );
      })}
    </div>
  );
};

export default IndexPage;
