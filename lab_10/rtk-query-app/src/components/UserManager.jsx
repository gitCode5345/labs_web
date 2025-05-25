import React, { useState } from 'react';
import { useGetUsersQuery, useAddUserMutation } from '../redux/apiSlice';

const UserManager = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();

  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !job) return;
    await addUser({ name, job });
    setName('');
    setJob('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Користувачі:</h2>
      {isLoading && <p>Завантаження...</p>}
      {error && <p>Помилка завантаження</p>}
      <ul>
        {data?.map((user, i) => (
          <li key={i}>
            {user.name} — {user.job}
          </li>
        ))}
      </ul>

      <h3>Додати користувача</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ім'я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Посада"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
};

export default UserManager;
